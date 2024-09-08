import React, { ReactNode } from "react";
import "./WebApp.css";
export interface IWebAppProps {
    list: string[];
}
export interface IWebAppState {
    voted: string | null;
}
export default class WebApp extends React.Component <IWebAppProps, IWebAppState> {
    state: IWebAppState = {
        voted: localStorage.getItem("voted")
    }
    onClick(event: any) {
        localStorage.setItem("voted", event.currentTarget.innerHTML);
        this.setState({voted:event.currentTarget.innerHTML});
    }
    render(): ReactNode {
        return <div className="webapp-container">
            {this.state.voted === null?<>
            <div>Для того, чтобы проголосовать, нажмите на ФИО</div>
            <div style={{display:"flex", flexFlow:"column", gap:"1em"}}>
            {this.props.list.map((v, i)=><button key={i} onClick={this.onClick.bind(this)}>{v}</button>)}
            </div>
            </>:<>
            <div>Ваш голос принят: {this.state.voted}</div>
            </>}
        </div>
    }
}
