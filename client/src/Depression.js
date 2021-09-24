import React from 'react';
import './card.css'
import { Card } from 'react-bootstrap';
import Top from './Top';

export default function Depression() {
    return (
        <>
            <Top
                src="img/bb.jpg"
                head='Depression'
                text="Depression is a state of low mood and aversion to activity.Classified medically as a mental and behavioral disorder,
                the experience of depression affects a person's thoughts, behavior, motivation, feelings, and sense of well-being.The core symptom of depression is 
                refers to loss of interest or a loss of feeling of pleasure in certain activities that usually bring joy to people."
            />
            <div className="page_con">
                <Card className="text-center card">
                    <h2 className="top">क्लैब्यं मा स्म गमः पार्थ ! नैतत्वय्युपपद्यते। <br />
                        क्षुद्रं ह्रदयदौर्बल्यं त्यक्त्वोत्तिष्ठ ? परन्तप !॥३॥ </h2>
                    <h2 className="stan">Chapter - Stanza 3</h2>
                    <h3>klaibyam mâ sma gamah pârtha naitat tvayyupapadyate;<br />
                        kshudram hridaya daurbalyam tyaktvottishtha parantapa</h3>
                    <hr />
                    <p><b>He pârtha</b> - O Arjuna! <b>Klaibyam</b > - The manner of a eunuch, i.e.
                        timidity,<b> mâ sma gamah</b> - do not follow, tvayi - for you who fought with
                        Rudra,<b>etat</b> - this timidity,<b>na upapadyate</b> - does not befit you,
                        <b>parantapa</b> - O Arjuna, torturer of the enemies,<b> kshudram</b> - of low quality,<b>hridaya daurbalyam</b> - mental weakness,<b>tyaktvâ</b> - having left aside,
                        <b>uttishtha</b> - do venture into the battle</p>
                    <h2 className="tr">Translation</h2>
                    <h3>Do not get into this unworthy weakness, it does
                        not suit you, one who has fought with Rudra, O Arjuna, give up this base
                        weakness of heart and arise, O destroyer of enemies. </h3>
                </Card>

                <Card className="text-center card">
                    <h2 className="top">मात्रास्पर्शास्तु कौन्तेय ! शीतोष्णसुखदुःखदाः।<br />आगमापायिनोऽनित्यास्तांस्तितिक्षस्व ! भारत !॥१४॥</h2>
                    <h2 className="stan">Chapter - Stanza 14</h2>
                    <h3>mâtrâsparshâstu kaunteya shitoshnasukhaduhkhadâh;<br />âgamâpâyino’nityâs tâmstitikshasva bhârata.</h3>
                    <hr />
                    <p><b>He kaunteya</b> - O Arjuna, the son of Kunti,<b>shitoshna-sukhaduhkhadâh</b>- those sense-object contacts which,
                        as a result, yield happiness or unhappiness, while receiving agreeable or disagreeable objects,
                        like cold and heat, etc.,<b>âgamapâyinah</b> - they come and go, are of transitory nature, hence<b>anityah</b> - temporary,
                        <b>mâtrâ-sparshâh </b>- Mâtrâ -(sense) objects like sound agreeable or disagreeable, etc., Sparshâh -(their) contact with senses.
                        <b> He bhârata</b> - O Arjuna<b> , tân titikshasva</b> endure them coming in the form of cold and heat, hard and soft, etc., with
                        courage, and without attachment to fruits till the act assigned by the Shâstras,like war, etc., comes to an end. Withstand them and their means.</p>
                    <h2 className="tr">Translation</h2>
                    <h3>The contact of senses with their objects, O Arjuna, gives rise to feelings of cold and heat, pleasure and pain.
                        They come andgo, are temporary, not lasting. Endure them without being perturbed untilthe end of your duty. </h3>
                </Card>

                <Card className="text-center card">
                    <h2 className="top">वेदाविनाशिनं नित्यं य एनमजमव्ययम्।<br />कथं स पुरुषः पार्थ कं ? घातयति हन्ति कम्॥२१॥</h2>
                    <h2 className="stan">Chapter - Stanza 21</h2>
                    <h3>vedâvinâshinam nityam ya enam ajam avyayam;<br />katham sa purushah pârtha kam ghâtayati hanti kam.</h3>
                    <hr />
                    <p><b>Yah</b>- He who,<b>ajam</b>- (knows this Self) to be unborn ,<b>avyayam</b>m – not liable to decay, thus,<b>avinâshinam nityam enam veda</b>he who knows this Self to be indestructible and eternal,
                        <b>sah purushah</b>that person,<b>he pârtha</b>a - O Arjuna, how does he kill the Self, which exists
                        in the body of a god or a man? He does not kill. And how does he cause
                        to kill anybody? He does not do so.In the case of the Self, indicated by the above-said characteristics, there is no possibility of this doer-ship independently or causatively in
                        regard to the act of killing.</p>
                    <h2 className="tr">Translation</h2>
                    <h3>He who knows this Self to be indestructible, unborn, non-decaying and hence eternal, how and whom does he kill or
                        cause to kill anyone? </h3>
                </Card>
            </div>
        </>
    )
}