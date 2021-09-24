import React, { useState } from 'react'
import { Card, Button,Collapse } from 'react-bootstrap';
import './card.css'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { IconButton } from '@material-ui/core';
import NVG from './nvg';
import Sidebar from './sidebar';
import Top from './Top';



function Greed() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Top
            src="img/bb.jpg"
            head='Greed'
            text="Greed is an uncontrolled urge for increase in the use or gain of material, food, money, land, social status, or power. 
            Greed has been identified as undesirable throughout known human history because it creates 
            behavior-conflict between personal and social goals."
            />
        <div className="page_con">
            <Card className="text-center card">
                <h2 className="top">कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वा धर्मसम्मूढछेताः।<br></br>
                    यच्छ्रेयः स्यान्निस्चितं ब्रुहि ! तन्मे शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम् ॥ ७ ॥ </h2>
                <h2 className="stan">Chapter - Stanza 7</h2>
                <h3>kârpanyadoshopahatasvabhâvah pricchâmi tvâm dharmasammudha chetâh;<br />yacchreyah syân nishchitam bruhi tanme shishyaste’ham shâdhi mâm tvâm prapannam  </h3>
                <hr />
                <p><span className="tobold">Kârpanya -doshopahata-svabhâvah </span>- Kârpanya - pitiable plight
                    on account of compassion and affection, Dosha - the sin accrued from the
                    killing of Gurus, Upahata Svabhâvah - one whose fighting spirit is marred
                    on account of these two, <span className="tobold">dharmasammudhachetâh</span>whose mind is
                    excessively confused about the duty of a Kshatriya; i.e. being doubtful
                    between what is right and wrong <span className="tobold">Aham tvâm pricchâmi -</span>Hence I would ask You, who are the
                    ocean of affection and grace to those who have taken Your shelter, ato
                    me yat - as to which line of action a person like me </p>
                <h2 className="tr">Translation</h2>
                <h3>My fighting spirit is marred due to the taint of faint
                    heartedness, my mind is confused in taking decision about the duty of a
                    Kshatriya. I ask You to tell me for certain, what will be good for me, Your
                    disciple, taking refuge in You, instruct me.  </h3>
                <IconButton
                   onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>
                    <ArrowDropDownCircleIcon color="#212121" />
                </IconButton>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </Collapse>
            </Card>
            <Card className="text-center card">
                <h2 className="top">कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वा धर्मसम्मूढछेताः।<br></br>
                    यच्छ्रेयः स्यान्निस्चितं ब्रुहि ! तन्मे शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम् ॥ ७ ॥ </h2>
                <h2 className="stan">Chapter - Stanza 7</h2>
                <h3>kârpanyadoshopahatasvabhâvah pricchâmi tvâm dharmasammudha chetâh;<br />yacchreyah syân nishchitam bruhi tanme shishyaste’ham shâdhi mâm tvâm prapannam  </h3>
                <hr />
                <p><span className="tobold">Kârpanya -doshopahata-svabhâvah </span>- Kârpanya - pitiable plight
                    on account of compassion and affection, Dosha - the sin accrued from the
                    killing of Gurus, Upahata Svabhâvah - one whose fighting spirit is marred
                    on account of these two, <span className="tobold">dharmasammudhachetâh</span>whose mind is
                    excessively confused about the duty of a Kshatriya; i.e. being doubtful
                    between what is right and wrong <span className="tobold">Aham tvâm pricchâmi -</span>Hence I would ask You, who are the
                    ocean of affection and grace to those who have taken Your shelter, ato
                    me yat - as to which line of action a person like me </p>
                <h2 className="tr">Translation</h2>
                <h3>My fighting spirit is marred due to the taint of faint
                    heartedness, my mind is confused in taking decision about the duty of a
                    Kshatriya. I ask You to tell me for certain, what will be good for me, Your
                    disciple, taking refuge in You, instruct me.  </h3>
                <IconButton
                   onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>
                    <ArrowDropDownCircleIcon color="#212121" />
                </IconButton>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </Collapse>
            </Card>
        </div>
        
        </>
    )
}

export default Greed


