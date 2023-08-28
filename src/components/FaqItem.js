import React, { Component } from 'react';

class FaqItem extends Component {
  render() {
    const { itemNum, question, answer } = this.props;
    return (
      <div className="accordion-item">
        <h2 className="h2-lg accordion-header" id={`heading_${itemNum}`}>
          <button 
            className="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target={`#collapse_${itemNum}`}  
            aria-expanded="false" 
            aria-controls={`collapse_${itemNum}`} 
          >
            {question}
          </button>
        </h2>
        <div 
          id={`collapse_${itemNum}`} 
          className="accordion-collapse collapse" 
          aria-labelledby={`heading_${itemNum}`} 
          data-bs-parent="#faq_accordion"
        >
          <div className="accordion-body">
            {answer} 
          </div>
        </div>
      </div>
    );
  }
}

export default FaqItem;
