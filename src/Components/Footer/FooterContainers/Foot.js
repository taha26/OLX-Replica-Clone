import React from "react";
import "./FootStyle.css";

class Foot extends React.Component {
    render() {
        return (
            <div className="FootDiv" data-aut-id="bottom-footer">
                <div className="FootSection">
                    <section className="FSec">
                        <span>Free Classifieds in Pakistan</span>.{/* */} {/* */}© 2006-2020{/* */} {/* */}OLX</section>
                        <section className="FSec"><span>Other Countries</span> <a href="https://www.olx.in/" target="_blank" rel="noopener noreferrer" className="FootAnch" data-aut-id>India</a> - <a href="https://www.olx.co.za/" target="_blank" rel="noopener noreferrer" className="FootAnch" data-aut-id>South Africa</a> - <a href="https://www.olx.co.id/" target="_blank" rel="noopener noreferrer" className="FootAnch" data-aut-id>Indonesia</a>
                        </section>
                </div>
            </div>
        )
    }
}

export default Foot;