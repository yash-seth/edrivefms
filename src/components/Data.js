import React, { useState, useEffect } from 'react'
import "../css/data.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListIcon from '@mui/icons-material/List';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import { db } from '../firebase';
import { Modal } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {CopyToClipboard} from 'react-copy-to-clipboard';


function Data(props) {
    let totalBytes = 0;
    const [files, setFiles] = useState([]);
    const [deleteModalState, setDeleteModalState] = useState(null);
    const [deleting, setDeleting] = useState(false);
    const [shareModalState, setshareModalState] = useState(null);
    const [sharing, setsharing] = useState(false);
    const [folderView, setfolderView] = useState(false);
    useEffect(() => {
        db.collection(`${props.userData.displayName}`).onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])
    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    const deleteFile = (filename, fileURL,bytes) => {
        setDeleting(true);
        console.log(`File ${filename} was deleted`);
        var file_query = db.collection(`${props.userData.displayName}`).where('fileURL', '==', fileURL);
        file_query.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                doc.ref.delete();
            });
        });
        let i = 0;
        setTimeout(() => {
            for(i=0;i<files.length;i++){
                if(files[i]['data']['fileURL']===fileURL){
                    files.splice(i, 1);
                    break;
                }
            }  
            storageHandler();
            setDeleteModalState(null);
            setDeleting(false);
        }, 2000);
    }

    const handleClose = () => {
        setDeleteModalState(null);
    }
    const shareClose = () => {
        setshareModalState(null);
    }
    const CopyClipboard = () =>{
        setsharing(true);
        setTimeout(()=>{
            setshareModalState(null);
            setsharing(false);
        },2000);

    }

    const storageHandler =() =>{
    files.map((file) => {
        if(file.data.type !== "folder") {
            props.settotalSize(totalBytes+=file.data.size);
        }
        if(fileCounter(files)===0) props.settotalSize(0);
    })
    }

    const fileCounter =(files)=>
    {
        let i=0,fileCounterVar=0;
        for(i=0;i<files.length;i++)
        {
            if(files[i].data.type==='file')fileCounterVar++;
        }
        return fileCounterVar
    }
    storageHandler();

    return props.searchState ? 
    (
        !folderView ? 
        <div className="data">
            <div className="data__header">
                <div className="data__headerLeft">
                    <p>My Drive</p>
                    <button className="Root-Btn" onClick={()=>{props.setFolderID("/");setfolderView(false)}}>Root</button>
                </div>
                <div className="data__headerRight">
                    <ListIcon />
                    <InfoOutlinedIcon />
                </div>
            </div>
            <div className="data__content">
                <div className="data_list">
                    <div className="detailsrow">
                        <p><b>Name <ArrowDownwardIcon /></b></p>
                        <p><b>Owner</b></p>
                        <p><b>Created At</b></p>
                        <p><b>File Size</b></p>
                        <p><b>Share</b></p>
                        <p><b>Delete</b></p>
                    </div>
                    {
                        files.map((file) => {
                                return file.data.filename.toLowerCase().includes(String(props.searchValue))? <div className="detailsrow">
                                <p> <a href={file.data.fileURL} target="_blank">
                                    <InsertDriveFileIcon />{file.data.filename}</a></p>
                                <p>{file.data.username}</p>
                                <p>{new Date(file.data.timestamp?.seconds * 1000).toUTCString()}</p>
                                <p>{formatBytes(file.data.size)}</p>
                                <p><button className="delete" onClick={() => setshareModalState(file.data.fileURL)}><ShareIcon/></button></p>
                                
                                <Modal open={file.data.fileURL===shareModalState} onClose ={shareClose}>
                                    <div className="modal_pop">
                                        <form>
                                            <div className="modalHeading">
                                                <h3>Copy the Below Link to Share</h3>
                                            </div>
                                            <div className="modalBody">
                                                {
                                                    sharing ? (<p className="uploading">Copying to Clipboard</p>) : (
                                                        <> <label>
                                                            <input className="link" type ="text" value={shareModalState} disabled/>
                                                            <CopyToClipboard text={shareModalState}><button className="delete" onClick={ ()=> CopyClipboard()}><ContentCopyIcon/></button></CopyToClipboard>
                                                            <button className="Close" onClick={() => setshareModalState(false)}>Close</button>
                                                            </label>
                                                        </>)
                                                }
                                            </div>
                                            
                                        </form>
                                    </div>    
                                </Modal>
                                <div className="del"><p><button className="delete" onClick={() => setDeleteModalState(file.data.fileURL)}><DeleteIcon /></button></p></div>
                                <Modal open={file.data.fileURL===deleteModalState} onClose={handleClose}>
                                    <div className="modal_pop">
                                        <form>
                                            <div className="modalHeading">
                                                <h3>Confirm Delete Operation?</h3>
                                            </div>
                                            <div className="modalBody">
                                                {
                                                    deleting ? (<p className="uploading">Deleting</p>) : (
                                                        <>  <label>
                                                            <button className="Yes" onClick={() =>{ deleteFile(file.data.filename, file.data.fileURL,file.data.size);props.settotalSize(props.totalSize-file.data.size)}}>Yes</button>
                                                            <button className="No" onClick={() => setDeleteModalState(null)}>No</button>
                                                        </label>
                                                        </>)
                                                }
                                            </div>
                                        </form>
                                    </div>
                                </Modal>
                                </div> : null
                        })
                    }

                </div>

            </div>
        </div>
        :
        <div className="data">
            <div className="data__header">
                <div className="data__headerLeft">
                    <p>My Drive</p>
                    <button className="Root-Btn" onClick={()=>{props.setFolderID("/");setfolderView(false)}}>Root</button>
                </div>
                <div className="data__headerRight">
                    <ListIcon />
                    <InfoOutlinedIcon />
                </div>
            </div>
            <div className="data__content">
            <div className="FolderHeading">Folders:</div>
                <div className="data_grid folder">
                    {
                        files.map((file) => {
                            if( file.data.parentFolderID === props.folderID && file.data.type === "folder"){
                                return file.data.filename.toLowerCase().includes(String(props.searchValue))? <>
                                <a onClick={()=> {props.setFolderID(`${file.data.folderID}`);setfolderView(true)}}>
                                    <div className="data_file">
                                        <p>{file.data.filename}</p>
                                    </div>
                                    </a>
                                </>:null
                            }
                        })
                    }


                </div>
                <div className="data_list">
                    <div className="detailsrow">
                        <p><b>Name <ArrowDownwardIcon /></b></p>
                        <p><b>Owner</b></p>
                        <p><b>Created At</b></p>
                        <p><b>File Size</b></p>
                        <p><b>Share</b></p>
                        <p><b>Delete</b></p>
                    </div>
                    {
                        files.map((file) => {
                            if( file.data.parentFolderID === props.folderID && file.data.type === "file"){
                                return file.data.filename.toLowerCase().includes(String(props.searchValue))? <div className="detailsrow">
                                <p> <a href={file.data.fileURL} target="_blank">
                                    <InsertDriveFileIcon />{file.data.filename}</a></p>
                                <p>{file.data.username}</p>
                                <p>{new Date(file.data.timestamp?.seconds * 1000).toUTCString()}</p>
                                <p>{formatBytes(file.data.size)}</p>
                                <p><button className="delete" onClick={() => setshareModalState(file.data.fileURL)}><ShareIcon/></button></p>
                                
                                <Modal open={file.data.fileURL===shareModalState} onClose ={shareClose}>
                                    <div className="modal_pop">
                                        <form>
                                            <div className="modalHeading">
                                                <h3>Copy the Below Link to Share</h3>
                                            </div>
                                            <div className="modalBody">
                                                {
                                                    sharing ? (<p className="uploading">Copying to Clipboard</p>) : (
                                                        <> <label>
                                                            <input className="link" type ="text" value={shareModalState} disabled/>
                                                            <CopyToClipboard text={shareModalState}><button className="delete" onClick={ ()=> CopyClipboard()}><ContentCopyIcon/></button></CopyToClipboard>
                                                            <button className="Close" onClick={() => setshareModalState(false)}>Close</button>
                                                            </label>
                                                        </>)
                                                }
                                            </div>
                                            
                                        </form>
                                    </div>    
                                </Modal>
                                <div className="del"><p><button className="delete" onClick={() => setDeleteModalState(file.data.fileURL)}><DeleteIcon /></button></p></div>
                                <Modal open={file.data.fileURL===deleteModalState} onClose={handleClose}>
                                    <div className="modal_pop">
                                        <form>
                                            <div className="modalHeading">
                                                <h3>Confirm Delete Operation?</h3>
                                            </div>
                                            <div className="modalBody">
                                                {
                                                    deleting ? (<p className="uploading">Deleting</p>) : (
                                                        <>  <label>
                                                            <button className="Yes" onClick={() =>{ deleteFile(file.data.filename, file.data.fileURL,file.data.size);props.settotalSize(props.totalSize-file.data.size)}}>Yes</button>
                                                            <button className="No" onClick={() => setDeleteModalState(null)}>No</button>
                                                        </label>
                                                        </>)
                                                }
                                            </div>
                                        </form>
                                    </div>
                                </Modal>
                                </div> : null
                            }
                        })
                    }

                </div>

            </div>
        </div>
    )
    :
    (
        <div className="data">
            <div className="data__header">
                <div className="data__headerLeft">
                    <p>My Drive</p>
                    <button className="Root-Btn" onClick={()=>{props.setFolderID("/");setfolderView(false)}}>Root</button>
                </div>
                <div className="data__headerRight">
                    <ListIcon />
                    <InfoOutlinedIcon />
                </div>
            </div>
            <div className="data__content">
                <div className="FolderHeading">Folders:</div>
                <div className="data_grid  folder">
                    {  files.map((file) => {
                            // console.log(file);
                            // let location = window.location.pathname;
                            if( file.data.parentFolderID === props.folderID && file.data.type === "folder"){
                                // console.log(file.data.filename);
                                return <>
                                    <a onClick={()=> {props.setFolderID(`${file.data.folderID}`);setfolderView(true)}}>
                                        {/* {console.log(props.folderID)} */}
                                        <div className="data_file">
                                            <p>{file.data.filename}</p>
                                        </div>
                                    </a>
                                </>
                            }
                        })
                    }


                </div>
                <div className="data_list">
                    <div className="detailsrow">
                        <p><b>Name <ArrowDownwardIcon /></b></p>
                        <p><b>Owner</b></p>
                        <p><b>Created At</b></p>
                        <p><b>File Size</b></p>
                        <p><b>Share</b></p>
                        <p><b>Delete</b></p>
                    </div>
                    {
                        files.map((file) => {
                            if( file.data.parentFolderID === props.folderID && file.data.type === "file"){
                            return <div className="detailsrow"> 
                                <p> <a href={file.data.fileURL} target="_blank" rel="noreferrer">
                                    <InsertDriveFileIcon />{file.data.filename}</a></p>
                                <p>{file.data.username}</p>
                                <p>{new Date(file.data.timestamp?.seconds * 1000).toUTCString()}</p>
                                <p>{formatBytes(file.data.size)}</p>
                                <p><button className="delete" onClick={() => setshareModalState(file.data.fileURL)}><ShareIcon/></button></p>
                                
                                <Modal open={file.data.fileURL===shareModalState} onClose ={shareClose}>
                                    <div className="modal_pop">
                                        <form>
                                            <div className="modalHeading">
                                                <h3>Copy the Below Link to Share</h3>
                                            </div>
                                            <div className="modalBody">
                                                {
                                                    sharing ? (<p className="uploading">Copying to Clipboard</p>) : (
                                                        <> <label>
                                                            <input className="link" type ="text" value={shareModalState} disabled/>
                                                            <CopyToClipboard text={shareModalState}><button className="delete" onClick={ ()=> CopyClipboard()}><ContentCopyIcon/></button></CopyToClipboard>
                                                            <button className="Close" onClick={() => setshareModalState(false)}>Close</button>
                                                            </label>
                                                        </>)
                                                }
                                            </div>
                                            
                                        </form>
                                    </div>    
                                </Modal>
                                <div className="del"><p><button className="delete" onClick={() => setDeleteModalState(file.data.fileURL)}><DeleteIcon /></button></p></div>
                                <Modal open={file.data.fileURL===deleteModalState} onClose={handleClose}>
                                    <div className="modal_pop">
                                        <form>
                                            <div className="modalHeading">
                                                <h3>Confirm Delete Operation?</h3>
                                            </div>
                                            <div className="modalBody">
                                                {
                                                    deleting ? (<p className="uploading">Deleting</p>) : (
                                                        <>  <label>
                                                            <button className="Yes" onClick={() => deleteFile(file.data.filename, file.data.fileURL,file.data.size)}>Yes</button>
                                                            <button className="No" onClick={() => setDeleteModalState(null)}>No</button>
                                                        </label>
                                                        </>)
                                                }
                                            </div>
                                        </form>
                                    </div>
                                </Modal>  
                            </div>
                            }
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default Data
