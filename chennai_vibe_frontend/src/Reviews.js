import React from "react";
import "./App.css";

/**
 * PUBLIC_INTERFACE
 * Reviews placeholder component.
 * Modern cards and testimonial styling.
 */
function Reviews() {
  return (
    <section className="cv-content-area" aria-label="Reviews">
      <div className="cv-card" style={{ minHeight: 230 }}>
        <h2 className="cv-section-title">Recent Vibe Reviews</h2>
        <div style={{display:"flex",gap:26,flexWrap:"wrap",marginTop:14,justifyContent:"start"}}>
          <div className="cv-card" style={{minWidth:220,maxWidth:320,background:"#fdf6ee",flex:1}}>
            <div style={{fontWeight:600,marginBottom:7}}>🌟🌟🌟🌟🌟</div>
            <div style={{fontStyle:"italic",color:"#757575"}}>“Amazing hosts, super unique experience – I never thought I’d enjoy paddleboarding in Chennai!”</div>
            <div style={{marginTop:10,fontSize:".98em",color:"#949494"}}>— Priya R.</div>
          </div>
          <div className="cv-card" style={{minWidth:220,maxWidth:320,background:"#fdf6ee"}}>
            <div style={{fontWeight:600,marginBottom:7}}>🌟🌟🌟🌟</div>
            <div style={{fontStyle:"italic",color:"#757575"}}>“Food walk was so tasty and well organized. The team was really friendly.”</div>
            <div style={{marginTop:10,fontSize:".98em",color:"#949494"}}>— Rahul K.</div>
          </div>
        </div>
        <div style={{marginTop:23,color:"#b8b8b8"}}>More participant reviews & social media gallery coming soon.</div>
      </div>
    </section>
  );
}

export default Reviews;
