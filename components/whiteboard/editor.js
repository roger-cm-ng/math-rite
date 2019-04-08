
import React, { Component } from 'react';
import * as MyScriptJS from 'myscript';
import './button.css';
import './diagram.css';
import 'myscript/dist/myscript.min.css';

const editorStyle = {
  minWidth: '100px',
  minHeight: '100px',
  width: '100vw',
  height: 'calc(100vh - 190px)',
  touchAction: 'none'
};

const result = {
  minHeight: '50px',
  textAlign: 'center'
};

class Editor extends Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
    this.clearBtnRef = React.createRef();
    this.undoBtnRef = React.createRef();
    this.redoBtnRef = React.createRef();
    this.convertBtnRef = React.createRef();
    this.resultRef = React.createRef();
  }

  render() {
    return (
      <div>
        <div id="result" style={result} ref={this.resultRef} />
        <nav className="nav-group">
          <div className="button-div">
            <button id="clear" ref={this.clearBtnRef} type="button" className="nav-btn btn-fab-mini btn-lightBlue" disabled>
              <img alt="clear" src="../assets/img/clear.svg" />
            </button>
            <button id="undo" ref={this.undoBtnRef} type="button" className="nav-btn btn-fab-mini btn-lightBlue" disabled>
              <img alt="undo" src="../assets/img/undo.svg" />
            </button>
            <button id="redo" ref={this.redoBtnRef} type="button" className="nav-btn btn-fab-mini btn-lightBlue" disabled>
              <img alt="redo" src="../assets/img/redo.svg" />
            </button>
          </div>
          <div className="spacer" />
          <button className="classic-btn" ref={this.convertBtnRef} type="button" id="convert" disabled>Convert</button>
        </nav>
        <div id="editor" ref={this.editorRef} style={editorStyle} />
      </div>
    );
  }

  componentDidMount() {
    const editorElement = this.editorRef.current;
      const resultElement = this.resultRef.current;
      const undoElement = this.undoBtnRef.current;
      const redoElement = this.redoBtnRef.current;
      const clearElement = this.clearBtnRef.current;
      const convertElement = this.convertBtnRef.current;
      // const { katex } = window.katex;
      editorElement.addEventListener('changed', (event) => {
        undoElement.disabled = !event.detail.canUndo;
        redoElement.disabled = !event.detail.canRedo;
        clearElement.disabled = event.detail.isEmpty;
      });
      // function cleanLatex(latexExport) {
      //   if (typeof latexExport === 'number') {
      //     latexExport = latexExport.toString();
      //   }
      //   if (latexExport.includes('\\\\')) {
      //     const steps = `\\begin{align*}${latexExport}\\end{align*}`;
      //     return steps.replace('\\overrightarrow', '\\vec')
      //       .replace('\\begin{aligned}', '')
      //       .replace('\\end{aligned}', '')
      //       .replace('\\llbracket', '\\lbracket')
      //       .replace('\\rrbracket', '\\rbracket')
      //       .replace('\\widehat', '\\hat')
      //       .replace(new RegExp('(align.{1})', 'g'), 'aligned');
      //   }
      //   return latexExport
      //     .replace('\\overrightarrow', '\\vec')
      //     .replace('\\llbracket', '\\lbracket')
      //     .replace('\\rrbracket', '\\rbracket')
      //     .replace('\\widehat', '\\hat')
      //     .replace(new RegExp('(align.{1})', 'g'), 'aligned');
      // }
      editorElement.addEventListener('exported', (evt) => {
        const { exports } = evt.detail;
        if (exports && exports['application/x-latex']) {
          convertElement.disabled = false;
         // katex.render(cleanLatex(exports['application/x-latex']),  resultElement);
          resultElement.innerHTML = `<span>${exports['application/x-latex']}</span>`;
        } else if (exports && exports['application/mathml+xml']) {
          convertElement.disabled = false;
          resultElement.innerText = exports['application/mathml+xml'];
        } else if (exports && exports['application/mathofficeXML']) {
          convertElement.disabled = false;
          resultElement.innerText = exports['application/mathofficeXML'];
        } else if (exports && exports['text/plain']) {
          convertElement.disabled = false;
          resultElement.innerHTML = `<span>${exports['text/plain']}</span>`;
        } else {
          convertElement.disabled = true;
          resultElement.innerHTML = '';
        }
      });
      undoElement.addEventListener('click', () => {
        editorElement.editor.undo();
      });
      redoElement.addEventListener('click', () => {
        editorElement.editor.redo();
      });
      clearElement.addEventListener('click', () => {
        editorElement.editor.clear();
      });
      convertElement.addEventListener('click', () => {
        editorElement.editor.convert();
      });

    this.editorElement = MyScriptJS.register(editorElement, {
      recognitionParams: {
        type: 'MATH',
        protocol: 'WEBSOCKET',
        apiVersion: 'V4',
        server: {
          scheme: 'https',
          host: 'webdemoapi.myscript.com',
          applicationKey: '515131ab-35fa-411c-bb4d-3917e00faf60',
          hmacKey: '54b2ca8a-6752-469d-87dd-553bb450e9ad'
        },
        v4: {
          math: {
            mimeTypes: ['application/x-latex', 'application/vnd.myscript.jiix']
          },
          export: {
            jiix: {
              strokes: true
            }
          }
        }
      }
    });
    /* eslint-disable-next-line no-undef */
    window.addEventListener('resize', () => { this.editorElement.resize(); });
  }
}

export default Editor;