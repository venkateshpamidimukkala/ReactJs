import React,{Component} from 'react'
import './Todo.css'
import  Note from './Note'

class Todo extends Component{
    constructor(props){
        super(props)
        this.state={
            noteText:'',
            notes:[],

        }

    }
    updateNoteText(noteText){
        this.setState({noteText:noteText.target.value})
        console.log(this.state.noteText)

    }    
    handleKeyPress=(event)=>{
        if(event.key === 'Enter'){
            let notesArr =this.state.notes;
        notesArr.push(this.state.noteText);
        this.setState({noteText:''});

        }
        
    }
    addNote(){
        if(this.state.noteText === ''){
            return
        }
        let notesArr =this.state.notes;
        notesArr.push(this.state.noteText);
        this.setState({noteText:''});
        this.textInput.focus();
    }

    deleteNote(index){
        let noteArr=this.state.notes;
        noteArr.splice(index,1);
        this.setState({notes:noteArr})

    }
    render(){
        let notes =this.state.notes.map((val,key)=>{
            return <Note key={key} text={val}
            deleteMethod={()=>this.deleteNote(key)}/>
        })
        return(
            <div className="container">
                <div className="header">React ToDo Application </div>
                
                {notes}
                <div className="btn" onClick={this.addNote.bind(this)}>+</div>


                <input type="text" ref={((input)=>{this.textInput = input})} 
                className="textInput" value={this.state.noteText}
                onChange={noteText => this.updateNoteText(noteText)}
                onKeyPress={this.handleKeyPress.bind(this)}/>
            </div>
        )
    }
}
export default Todo