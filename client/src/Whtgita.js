import React from 'react'
import Top from './Top'
import { Card, Col, Dropdown, Nav, NavDropdown, NavItem, Row,Collapse } from 'react-bootstrap';
import './card.css'
import Tab from 'react-bootstrap/Tab'
import { MenuItem } from '@material-ui/core';
import TabTemp from './TabTemp';
import { useState } from 'react';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { IconButton } from '@material-ui/core';

function Whtgita() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Top
                src="img/sandip.jpg"
                head='BHAGAVAD GITA'
                    text="The Gitâ is a fathomless ocean of knowledge. It is filled with a
                    vast treasure of spiritual knowledge that is unlimited and never-ending.
                    Many great scholars and souls, who are the seers of truth, find that their
                    voices are dulled, their speech muted and their language inadequate, when
                    they attempt to comprehend the Gitâ’s truths. This is because Bhagavân
                    Shree Krishna alone knows the full extent of all its hidden secrets, mysteries and doctrines."
            />
            <div className="whatgita">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">What is Bhagvad Gita</Nav.Link>
                                </Nav.Item>
                                <NavDropdown eventKey="3" title="Summary of Gitâ Chapters">
                                
                                    {/* <MenuItem  eventKey="3.1">Chapter 1</MenuItem >
                                    <MenuItem  eventKey="3.2">Chapter 2</MenuItem >
                                    <MenuItem  eventKey="3.3">Chapter 3</MenuItem >
                                    <MenuItem  eventKey="3.4">Chapter 4</MenuItem >
                                    <MenuItem  eventKey="3.5">Chapter 5</MenuItem >
                                    <MenuItem  eventKey="3.6">Chapter 6</MenuItem >
                                    <MenuItem  eventKey="3.7">Chapter 7</MenuItem >
                                    <MenuItem  eventKey="3.8">Chapter 8</MenuItem >
                                    <MenuItem  eventKey="3.9">Chapter 9</MenuItem >
                                    <MenuItem  eventKey="3.10">Chapter 10</MenuItem >
                                    <MenuItem  eventKey="3.11">Chapter 11</MenuItem >
                                    <MenuItem  eventKey="3.12">Chapter 12</MenuItem >
                                    <MenuItem  eventKey="3.12">Chapter 13</MenuItem >
                                    <MenuItem  eventKey="3.14">Chapter 14</MenuItem >
                                    <MenuItem  eventKey="3.15">Chapter 15</MenuItem >
                                    <MenuItem  eventKey="3.16">Chapter 16</MenuItem >
                                    <MenuItem  eventKey="3.17">Chapter 17</MenuItem >
                                    <MenuItem  eventKey="3.18">Chapter 18</MenuItem > */}
                                    
                                </NavDropdown>
                                <div className="navcon">
                                <Nav.Item>
                                    <Nav.Link eventKey="3.1">Chapter 1</Nav.Link>
                                    <Nav.Link eventKey="3.2">Chapter 2</Nav.Link>
                                    <Nav.Link eventKey="3.3">Chapter 3</Nav.Link>
                                    <Nav.Link eventKey="3.4">Chapter 4</Nav.Link>
                                    <Nav.Link eventKey="3.5">Chapter 5</Nav.Link>
                                    <Nav.Link eventKey="3.6">Chapter 6</Nav.Link>
                                    <Nav.Link eventKey="3.7">Chapter 7</Nav.Link>
                                    <Nav.Link eventKey="3.8">Chapter 8</Nav.Link>
                                    <Nav.Link eventKey="3.9">Chapter 9</Nav.Link>
                                    <Nav.Link eventKey="3.10">Chapter 10</Nav.Link>
                                    <Nav.Link eventKey="3.11">Chapter 11</Nav.Link>
                                    <Nav.Link eventKey="3.12">Chapter 12</Nav.Link>
                                    <Nav.Link eventKey="3.12">Chapter 13</Nav.Link>
                                    <Nav.Link eventKey="3.14">Chapter 14</Nav.Link>
                                    <Nav.Link eventKey="3.15">Chapter 15</Nav.Link>
                                    <Nav.Link eventKey="3.16">Chapter 16</Nav.Link>
                                    <Nav.Link eventKey="3.17">Chapter 17</Nav.Link>
                                    <Nav.Link eventKey="3.18">Chapter 18</Nav.Link>
                                </Nav.Item>
                                </div>
                                
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className="page_con">
                                        <Card className="text-center card">
                                            <h3>The Shreemad Bhagavad Gitâ is indeed the direct manifestation
                                                of the divine voice of Bhagavân. Its greatness and glory are boundless
                                                and immeasurable. It is impossible for anyone to describe it properly in
                                                reality. Its greatness and glory has been sung at many places in the Itihâsas
                                                (historical epics), Purânas (ancient sacred narratives), and other scriptures. However, all these praises put together fall short in representing the
                                                greatness and glory of the Shreemad Bhagavad Gitâ in total. The Gitâ is
                                                a supreme Shâstra containing the preaching of Lord Shree Krishna to His
                                                devotee Arjuna.<br />
                                                The essence of all the Vedas have been brought together in it. It
                                                has been composed in such a simple and beautiful manner that even after
                                                a small amount of study a person may grasp the basic principles. But its
                                                true purport are so deep, so secret and so profound that even a lifetime of
                                                continuous study and contemplation would not be enough to reach its
                                                actual depth.</h3>

                                            <IconButton
                                                onClick={() => setOpen(!open)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open}>
                                                <ArrowDropDownCircleIcon color="#212121" />
                                            </IconButton>
                                            <Collapse in={open}>
                                                <div id="example-collapse-text">
                                                Everyday new emotions, new feelings and new insights
                                                keep arising from within the Gitâ, and as a result it remains ever fresh and
                                                attractive. If a person, endowed with faith and devotion, were to contemplate upon it with a focused mind, the supreme secrets contained in each
                                                and every word would be revealed directly. The manner in which
                                                Bhagavân’s various virtues, splendor, essential truths, mysteries, modes
                                                of worship, as well as the description of Karma (action) and Gnyâna
                                                (knowledge) have all been revealed in this scripture, is rarely found in any
                                                other. The Bhagavad Gitâ is one incomparable and matchless holy scripture in which there is not a single word which is devoid of true teaching.
                                                There is not a single word in the Gitâ which could be called baseless,
                                                disagreeable or not illuminating. Whatever has been stated in it is the
                                                utmost truth. To think of the possibility of there being anything disagreeable, baseless or false in the words of Bhagavân, who is the manifestation
                                                of truth itself, would be disrespectful to His utterances.
                                                </div>
                                            </Collapse>
                                        </Card>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.1">
                                    <TabTemp
                                        head="Chapter 1 - Vishâda Yoga"
                                        sub="(Lamenting the Consequence of War)"
                                        body="Chapter one introduces the scene, the setting, the circumstances
                                and the characters involved in determining the reasons for the Bhagavad
                                Gitâ’s revelation. The scene is the sacred place of Kurukshetra. The
                                setting is a battlefield. The circumstance is war. The main characters are
                                the Supreme Lord Krishna and Prince Arjuna, witnessed by four million
                                soldiers led by their respective military commanders. After naming the
                                principal warriors on both sides, Arjuna’s growing dejection is described
                                due to the fear of losing friends and relatives in the course of the impending war and the subsequent sins attached to such action. Arjuna’s weapon
                                slipped from his hand and negated for war and seated himself on the
                                surface of the chariot. Thus this chapter is entitled ‘Lamenting the Consequence of War’."/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.2">
                                    <TabTemp
                                        head="Chapter 2 - Sânkhya Yoga"
                                        sub="(The Yoga of Knowledge)"
                                        body="In chapter two Arjuna accepts the position as a disciple of Lord
                                Krishna and having surrendered completely to Him requested the Lord to
                                instruct him how to dispel his lamentation and grief. To dispel his ignorance and perplexity, Lord started with an introduction explaining the eternity of the soul. In various types of expressions after concluding the immortality of the soul, He reconciled him by explaining the normality of
                                death and birth to become ready for the war. Lord also emphasized with
                                reason not to grieve for any beings as that was not in his control. He made
                                vivid the theory of duty. There are only a few fortunate Kshatriyas who,
                                due to their previous meritorious deeds, have the privilege of going to
                                battle and being worthy of heaven. He also made clear the significance of
                                this battle to be fought. Seeing a little determination returning within Arjuna,
                                Lord strengthens that determination by explaining the Karma Yoga and a
                                technique to be observed while performing action. The technique is nothing else but giving up the results to the Lord. Renunciation of the fruit of
                                actions to the almighty is considered as a path of achieving his abode, i.e.Moksha. When Arjuna enquired about the definition of Sthitapragna, Lord Krishna explains its various stages. Further, Lord extended this chapter to control one’s mind to win over the expectation of pleasure from external objects. Thus attaining peace and ridding of the feelings of I-ness and my-ness is stressed. This stage is named as Bhrahmi by attaining which one will not become confused or perplexed. Thus this chapter is entitled ‘The Yoga of Knowledge’."/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.3">
                                    <TabTemp
                                        head="Chapter 3 - Karma Yoga"
                                        sub="(The Eternal Duties of a Human Being)"
                                        body="Chapter three establishes the fact by various points of view that
                                the performance of prescribed duties is obligatory for everyone. Here
                                Lord Krishna exclusively and comprehensively explains how it is the duty
                                of each and every member of society to carry out their functions and
                                responsibilities in their respective stage of life according to the rules and
                                regulations laid down by the scriptures to befit our position in the society
                                in which we live. Further the Lord elaborated why such duties must be
                                performed, what benefit is gained by performing them, and what harm is
                                caused by not performing them. Actions that lead to bondage and actions
                                that lead to salvation are also explained. All these points relating to duty
                                have been described in detail. Thus this chapter is entitled ‘The Eternal
                                Duties of Human Beings’."/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.4">
                                    <TabTemp
                                        head="Chapter 4 - Gnyâna-Karma-Sannyâs Yoga"
                                        sub="(The Yoga of Renunciation of Action in Knowledge)"
                                        body="In chapter four, Lord Krishna reveals how in Karma Yoga the knowledge
                                of action is received by succeeding disciples, and also narrates the reason
                                and nature of His descent into this material world. Here He explains His
                                own characteristics, the paths of action and knowledge as well as the
                                wisdom regarding the supreme knowledge which results at the culmination of the two aspects, viz., the aspect of work and the aspect of knowledge. Thus this chapter is entitled ‘The Yoga of Renunciation of Action in
                                Knowledge’."/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.5">
                                    <TabTemp
                                        head="Chapter 5 - Sannyâs Yoga"
                                        sub="(Yoga of True Renunciation)"
                                        body="After being requested by Arjuna to prescribe any one path which
                                    will yield the ultimate result between Gnyâna Yoga (renunciation of Karma)
                                    and Karma Yoga, in chapter five Lord Krishna defines the concepts of
                                    action with detachment (Karma Yoga) and renunciation in actions (Gnyâna
                                    Yoga) explaining them to be the means of the same goal. He also emphasizes that Karma Yoga is better than Gnyân Yoga. The doer of all duties
                                    will never feel that he is performing his duties. Such doer will realize them
                                    to be the qualities of nature and will never accept its ownership upon
                                    himself. This is the way to get rid of the results which affect us being good
                                    or bad leading to bondage. The great Karmayogis, with the body and the
                                    mind free from ego, perform work with determination for the purification
                                    of the Self. Adopting duties in this strategic manner, i.e. abandoning the
                                    fruits of work, leads to perpetual peace arising from Self realisation. But
                                    those desireful for the fruits of actions become subject of bondage. Here,
                                    Lord Krishna explains how salvation is attained by the pursuance of these
                                    paths. Thus this chapter is entitled ‘Yoga of True Renunciation’."/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.6">
                                    <TabTemp
                                        head="Chapter 6 - Dhyâna Yoga"
                                        sub="(Yoga of Meditation)"
                                        body="In chapter six Lord Krishna reveals Ashtânga (eight-fold) Yoga,
                                    and the exact process of practicing such Yoga. He explains in detail the
                                    difficulties of the mind and the procedures by which one can gain mastery
                                    over the mind through Yoga which reveals the spiritual nature of a living
                                    entity. He narrates also the methods to control the mind. In the middle,
                                    being questioned by Arjuna regarding the stage of incompletion in Yoga
                                    and the position of such a person, Lord Krishna answers, ‘No one who
                                    does good in the form of practicing Yoga, which is the highest good deed,
                                    will ever meet with misfortune’. And being questioned about Yogabhrashta,
                                    He further narrates the result of Yogabhrashta (disengagement from Yoga).
                                    A Yogabhrashta would attain the higher worlds for his meritorious deeds
                                    and return back by taking birth in a pious and prosperous circumstance
                                    and gradually progressing in his Yoga, getting rid of all remaining impurities to reach his highest goal. Lord Krishna eulogizes the Yogi whose thoughts
                                    become profound by the practice of Yoga. Four-fold classification of
                                    Yogis, the support of Yoga, success in Yoga, and the greatness of Bhakti
                                    Yoga, are also the subjects of this chapter.
                                    "/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.7">
                                    <TabTemp
                                        head="Chapter 7 - Gnyâna-Vignyâna Yoga"
                                        sub="(Yoga of Knowledge and Realization)"
                                        body="In chapter seven Lord Krishna gives concrete knowledge of the
                                    absolute reality as well as the opulence of divinity. He describes His
                                    illusory energy in the material existence called Mâyâ and declares how
                                    extremely difficult it is to surmount it. He reveals that He can never be
                                    approached by evil. He also describes how the four types of people
                                    attracted to divinity by their meritorious deeds, approach him, i.e. the
                                    distressed, the cravers, desirous of wealth, and who seeks knowledge of
                                    Him. Among these, the fourth is the best, as he dwells with his devotion.
                                    The love he has for the Almighty is unique. God also possesses the same
                                    amount of love for him. Such a devoted person reaches His lotus feet at
                                    the end of several births and such one is very hard to be found. Here
                                    Lord Krishna reveals the subtle truth by saying, ‘Whoever desires to
                                    worship any deity, other than Myself, I provide the motivation to him and
                                    remove any obstacles in his path of worship. By worshipping with zeal his
                                    favourite deity, he attains the results provided by Me. But those results
                                    are impermanent. They reach those deities. But those who worship Me,
                                    attain Me.’ In conclusion, He reveals that, ‘One who considers Me as
                                    Adhibhuta or Adhidaiva or Adhi Yagna, remembers Me at the time of
                                    death and reaches Me. Thus this chapter is entitled ‘Yoga of Knowledge
                                    and Realization’."/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.8">
                                    <TabTemp
                                        head="Chapter 8 - Akshara Brahma Yoga"
                                        sub="(The Yoga of the Imperishable Brahma)"
                                        body="In chapter eight after explaining the terms Adhibhuta, Adhidaiva
                                    and Adhiyagna, Lord Krishna emphasizes the science of Yoga. Revealing
                                    that one attains whatever one remembers at the end of one’s life, Lord
                                    emphasizes the significance of His thought at the time of death. Hence
                                    every one is ordered to be with His thoughts always. It is also revealed 
                                    that by constant meditation on Paramapurusha without deviation, one can
remember Him at the end of his life. All worlds, including the world of
Brahmâ, are subject to destruction. But for those who have attained Him
will not ever be subjected to rebirth. Also He gives information on the
creation of the material worlds as well as establishing a distinction between them and the spiritual world. Here He explains the light and dark
paths. One who crosses the light path attains the eternal world, and the
other path leads to this mundane world again."/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.9">
                                    <TabTemp
                                        head="Chapter 9 - Râja-Vidyâ-Guhya Yoga"
                                        sub="(Confidential Knowledge of the Ultimate Truth)"
                                        body="In chapter nine Lord Krishna reveals the sovereign science (Râja
                                        Vidyâ) and the sovereign secret (Râja Guhya). He explains how the entire material existence is created, pervaded, maintained and annihilated by
                                        His external energy, and how all beings come and go under His supervision. All beings, sentient and insentient, at the end of the Kalpa, become
                                        His Prakriti (part of His body). He will make them manifest again at the
                                        beginning of the new Kalpa. The actions of creation, etc., will not bind
                                        Him as He remains neutral. When He stays as a controller, the matter
                                        (Prakriti) produces this world of movable and immovable things. By this
                                        means the universe revolves. But the ignorant, not knowing His incomparable state as the Lord of the universe, conceive Him as a normal human
                                        being when He incarnates in the human form. But the great one understands Him as the prime reason of this whole universe as they have the
                                        vision of divinity. They always chant His names and meditate upon Him.
                                        Lord also reveals His universal form by declaring Himself as being prevalent in several forms such as sacrifice, Svadhâ (which pleases the manes),
                                        oblation, mantra, fire, father, mother, supporter, purifier, Pranava, all the
                                        Vedas, goal, controller, witness, and the abode. He is the one who provides the heat to the sun and holds back the rains. Those who meditate on
                                        Him, desiring no other fruits, and yearning for eternal union with Him, are
                                        released from Samsâra and attain eternal bliss. The subject matters covered subsequently are primarily concerned with devotional service, and
                                        the Lord Himself orders in the final verse to fix one’s mind on Him, to be
                                        humble towards Him, regard Him as the highest goal and to fix the mind in
                                        Him by which one can attain Him. Thus this chapter is entitled ‘Confidential Knowledge of the Ultimate Truth.’"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.10">
                                    <TabTemp
                                        head="Chapter 10 – Vibhuti Yoga"
                                        sub="(The Yoga of Divine Manifestations)"
                                        body="Chapter ten plays the vital role in generating and developing devotion. Bhagavân reveals His exalted position as the cause of all causes.
                                    He also specifies His special manifestations and opulence. As per the
                                    prayer of Arjuna, the Lord describes His opulence. Anything which appears glorious, prosperous and full of prowess should be understood as
                                    having emerged from a particle of His splendour. Lord Krishna has given
                                    a huge list of His magnificence beginning with, ‘Of the Âdityas I am Vishnu,
                                    among the lights I am the radiant Sun, etc.’ Further He adds, ‘There is no
                                    end to My manifestations. What you have heard however is mere illustrations of My limitless grandeur.’ To say in short through the words of Lord
                                    Krishna, ‘I am, indeed, the seed of all beings. There is nothing moving or
                                    stationary that can exist without Me,’ is an essential aspect of this chapter."/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.11">
                                    <TabTemp
                                        head="Chapter 11 - Vishvarupa-Darshana Yoga"
                                        sub="(The Vision of the Universal Form)"
                                        body="In chapter eleven, revealing his gratitude for removing his ignorance, Arjuna further wants to behold the universal form of Lord Krishna
                                    and humbly requests to reveal that. The way of his request pleases Krishna
                                    and at once He starts to reveal His transcendent form of various colours
                                    and contours. Arjuna is given divine sight, but he cannot bear the vision of
                                    the divine form of the Lord and starts to eulogize Krishna. Lord reveals
                                    the truth that it is extremely difficult to comprehend His divine universal
                                    form. Even celestials have always longed to see this form. Thus this
                                    chapter is entitled ‘The Vision of the Universal Form.’"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.12">
                                    <TabTemp
                                        head="Chapter 12 - Bhakti Yoga"
                                        sub="(The Yoga of Devotion)"
                                        body="In chapter twelve, Lord Krishna answers the following question
                                    posed by Arjuna, ‘Who is better amongst those who seek You and those 
                                    who seek the Self?’ Lord answers that the devotee who meditates upon
                                    Him with an aim of having eternal union with Him is better than the other
                                    who seeks the Self. The seeker of the Self can also attain Him, but by
                                    encountering many difficulties along the way. But for the previous one the
                                    Lord Himself assists in his upliftment. Additionally, He explains the different forms of spiritual disciplines and discusses the qualities of the devotees, who, by performing their activities in this way become very dear to
                                    Him. Thus this chapter is entitled ‘The Yoga of Devotion.’
                                    "/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.13">
                                    <TabTemp
                                        head="Chapter 13 - Kshetra-Kshetragnya Vibhâga Yoga"
                                        sub="(The Individual and the Ultimate Consciousness)"
                                        body="In chapter thirteen Lord Krishna reveals the difference between
                                    the physical body and the immortal soul. He explains that the physical is
                                    transitory and perishable whereas the soul is immutable and eternal. He
                                    also lists some virtues which arise in the course of the connection of the
                                    Self with the body, which should be cultivated as means of gaining knowledge such as Amânitvam, Adambhitvam, etc. The Lord also gives precise
                                    knowledge about the individual soul and the ultimate soul. Thus this chapter is entitled ‘The Individual and the Ultimate Consciousness.’"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.14">
                                    <TabTemp
                                        head="Chapter 14 - Gunatraya-Vibhâga Yoga"
                                        sub="(The Three Qualities of Material Nature)"
                                        body="In chapter fourteen Lord Krishna reveals matters pertaining to
                                    goodness, passion and ignorance by which everything in the material existence is influenced by. He gives pertinent details on the essential characteristics of each quality of nature individually, their cause, the level of their
                                    potency, how they influence a living entity affected by them as well as the
                                    signs of one who has risen above them. Here He clearly advises to relinquish oneself from ignorance and passion and adopt the path of pure
                                    goodness until acquiring the ability to transcend them. To say in short, the
                                    constituent characteristics of the body; their work; the method to overcome them and method to achieve the three goals (Kaivalyam, Aishvaryam,
                                    and Moksham) by the grace of God are the subject matters of this chapter. Teachings such as ‘From Sattva is born wisdom (realization of the
                                    Self), from Rajas is born greed and from Tamas is born delusion as well as ignorance,’ and ‘Those who are steady in Sattva go upwards; Râjasika
                                    people remain in the middle and Tâmasika people go downwards,’ are
                                    interesting pieces of information in this chapter. Thus this chapter is entitled ‘The Three Qualities of Material Nature.’
                                    "/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.15">
                                    <TabTemp
                                        head="Chapter 15 - Purushottama Yoga"
                                        sub="(Realization of the Ultimate Truth)"
                                        body="Chapter fifteen starts with the very familiar Shloka, ‘urdhvamulam
                                    adhahshâkham…vedavit’. Lord Krishna reveals the virtues, the glories and transcendental characteristics of God being omnipotent, omniscient and omnipresent, differentiating Him from sentient Self. He is seated
                                    in the heart of all. From Him flows memories, knowledge and ignorance.
                                    He is the one to be known through the Vedas. He alone is the bestower of
                                    the fruit promised by the Vedas and He alone is the true knower of the
                                    meaning of the Vedas. Apart from the Self and the released Self, the third
                                    one is the Supreme, who is totally different from both. He is known as
                                    Brahma or Ishvara and bares all the three worlds within Himself. Also
                                    Lord Krishna explains the purpose and value of knowing about God and
                                    the means by which He can be realized. Thus this chapter is entitled
                                    ‘Realization of the Ultimate Truth.’"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.16">
                                    <TabTemp
                                        head="Chapter 16 - Daivasura-Sampad-Vibhâga Yoga"
                                        sub="(The Divine and Demoniac Natures)"
                                        body="In chapter sixteen Lord Krishna describes in detail the divine properties and conducts and actions which are righteous in nature and conducive to divinity. Some of the divine qualities mentioned are fearlessness,
                                    mental purity, remaining steady, etc. These are the qualities of those born
                                    to carry out the commands of the Lord. Also He delineates the devilish
                                    properties and ill conducts which are unrighteous in nature. The qualities
                                    of those born to break the commands of the Lord are mentioned as ostentation, arrogance, self conceit, anger, harshness, etc. The differentiation among the qualities of the divine and the evil is prescribed only to be
                                    in the control of Shâstras, and to preserve the detailed knowledge of the
                                    truth and means to be practiced. In conclusion, Lord Krishna says, ‘He
                                    who, throwing overboard My commands in the form of the Vedas and
                                    does not tread the path which pleases Me, attains neither happiness nor
                                    success here, nor the highest goal (Moksha) hereafter.’ Thus this chapter
                                    is entitled ‘The Divine and the Demoniac Natures’."/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.17">
                                    <TabTemp
                                        head="Chapter 17 - Shraddhâtraya-Vibhâga Yoga"
                                        sub="(The Three Divisions of Faith)"
                                        body="In chapter seventeen Lord Krishna classifies the three divisions of
                                    faith, revealing the different qualities of faith in the Supreme that determine
                                    the character of living entities. These three types of faith determine one’s
                                    consciousness in this world. To identify the Sâttvikas, Râjasikas and
                                    Tâmasikas, He explains their behaviours and their nature. In the same
                                    way He narrates three kinds of food, offerings, penance, charity, etc. Thus
                                    this chapter is entitled ‘The Three Divisions of Faith’."/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.18">
                                    <TabTemp
                                        head="Chapter 18 - Moksha-Upadesha Yoga"
                                        sub="(Final Revelation of the Ultimate Truth)"
                                        body="In this final chapter Lord Krishna sums up the previous chapters and describes the attainment of salvation by the paths of Karma Yoga, as described in chapters one to six, and by Gnyâna Yoga, as described in chapters thirteen to eighteen. The Lord explains that while following these
                                    paths one must offer, without reservation, everything to God. The knowledge revealed progressively becomes more subtle than previous chapters. He eulogises the person desirous of Moksha extremely. This chapter contains large number of verses. Several verses are highly significant
                                    such as ‘ishvarah sarvabhutânâm…’, ‘tameva sharanam gaccha…’,
                                    ‘manmanâ bhava madbhakto…’, ‘sarvadharmân parityajya…’, etc.,
                                    are placed in this conclusive part. In this chapter He reveals that the
                                    whole Bhagawad Gitâ is highly secret and not to be taught to the unworthy and at the same time to be taught to the worthy person. He says,
                                    ‘Such a preceptor who teaches the worthy one, reaches Me, attaining
                                    Bhakti gradually’. By this whole teaching, He convinced Arjuna to fight
                                    and subsequently Arjuna casted away his stubbornness not to fight saying,
                                    ‘Destroyed is my delusion, and through Your grace true knowledge is
                                    gained’. Thus this chapter is entitled ‘Final Revelation of the Ultimate
                                    Truth’."/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>













            {/* <div className="sideleft">
                    <a href="#mean"></a><br />
                    <a href="#contact"></a>
                </div>
                <div className="sideright">
                    <div class="item" id="mean">
                    </div>
                    <div class="item" id="contact">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
                    </div>
                    <div class="item">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
                    </div>
                    <div class="item">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
                    </div>
                </div>
              <div className="page_con">
                                        <Card className="text-center card">
                                            <h3>The Shreemad Bhagavad Gitâ is indeed the direct manifestation
                                                of the divine voice of Bhagavân. Its greatness and glory are boundless
                                                and immeasurable. It is impossible for anyone to describe it properly in
                                                reality. Its greatness and glory has been sung at many places in the Itihâsas
                                                (historical epics), Purânas (ancient sacred narratives), and other scriptures. However, all these praises put together fall short in representing the
                                                greatness and glory of the Shreemad Bhagavad Gitâ in total. The Gitâ is
                                                a supreme Shâstra containing the preaching of Lord Shree Krishna to His
                                                devotee Arjuna.<br />
                                                The essence of all the Vedas have been brought together in it. It
                                                has been composed in such a simple and beautiful manner that even after
                                                a small amount of study a person may grasp the basic principles. But its
                                                true purport are so deep, so secret and so profound that even a lifetime of
                                                continuous study and contemplation would not be enough to reach its
                                                actual depth. <br />Everyday new emotions, new feelings and new insights
                                                keep arising from within the Gitâ, and as a result it remains ever fresh and
                                                attractive. If a person, endowed with faith and devotion, were to contemplate upon it with a focused mind, the supreme secrets contained in each
                                                and every word would be revealed directly. The manner in which
                                                Bhagavân’s various virtues, splendor, essential truths, mysteries, modes
                                                of worship, as well as the description of Karma (action) and Gnyâna
                                                (knowledge) have all been revealed in this scripture, is rarely found in any
                                                other. The Bhagavad Gitâ is one incomparable and matchless holy scripture in which there is not a single word which is devoid of true teaching.
                                                There is not a single word in the Gitâ which could be called baseless,
                                                disagreeable or not illuminating. Whatever has been stated in it is the
                                                utmost truth. To think of the possibility of there being anything disagreeable, baseless or false in the words of Bhagavân, who is the manifestation
                                                of truth itself, would be disrespectful to His utterances.</h3>
                                        </Card>
                                    </div>
            
            
             */}
        </div>
    )
}

export default Whtgita
