import React from 'react';
import { triforce, openLink } from '../helpers/svgs';

export const aboutMe = {
  content: (
    <div className="about-me">
      <h1>About</h1>
      <p>My name is Richi Jeffery. I am a developer.</p>
      <p>
        I have a wife and three kids who I love more than anything in this world. I
        have been playing video games my whole life. Some of my favorites
        include Zelda, Mario, Metroid, Destiny, Final Fantasy, Resident Evil,
        and so many more.
      </p>
      <div
        className="triforce-svg-container"
        dangerouslySetInnerHTML={{ __html: triforce }}
      />
      <p>
        If I'm not spending time with my family, coding, or playing video games,
        I'm usually playing board games, the guitar, piano, or bass, or trying
        to learn a new instrument. My collection of video games, posters, books,
        and figures, rival that of GameStop and Best Buy.
      </p>
      <p>
        I have a sense of humor which most people enjoy and I get along with
        everyone. I don't like to watch sports but I do enjoy playing
        basketball, soccer, and throwing footballs or baseballs around.
      </p>
    </div>
  ),
  classes: 'container names focus'
};

export const education = {
  content: (
    <div className="education">
      <h1>Education</h1>
      <ul>
        {' '}
        <li>
          Rockit Bootcamp | June 2015-Aug 2015 | Graduated First in My Class
        </li>{' '}
        <li>
          The University of Advancing Computer Technology​ | 2009-2012 | 4.0 GPA
          maintained
        </li>{' '}
        <li>USMC | 2006-2007 | Aviation Electronic Technician</li>{' '}
      </ul>
    </div>
  )
};

export const military = {
  content: (
    <div className="military">
      <h1>Military</h1>
      <p>
        USMC | Aviation Electronic Technician & Marine Air Traffic Controller
      </p>
      <ul>
        Stationed at: <li>MCRD San Diego, CA</li> <li>Camp Pendleton, CA</li>{' '}
        <li>NAS Pensacola, FL</li> <li>Camp Lejeune, NC</li>{' '}
      </ul>
    </div>
  )
};

export const projects = {
  content: (
    <div className="projects">
      <h1>Projects on Github</h1>
      <ul>
        {' '}
        <li>
          {' '}
          <a target="_blank" href="https://github.com/richi1717/portfolio">
            {' '}
            Portfolio (the site you're on){openLink}
          </a>
        </li>{' '}
        <li>
          {' '}
          <a
            target="_blank"
            href="https://github.com/richi1717/ellies-quest-rebirth"
          >
            {' '}
            Ellie's Quest Rebirth{openLink}
          </a>
        </li>{' '}
        <li>
          {' '}
          <a target="_blank" href="https://github.com/richi1717/finances">
            {' '}
            Budget Helper{openLink}
          </a>
        </li>{' '}
        <li>
          {' '}
          <a target="_blank" href="https://github.com/richi1717/machi-koro">
            {' '}
            Machi Koro{openLink}
          </a>
        </li>{' '}
        <li>
          {' '}
          <a target="_blank" href="https://github.com/richi1717/instagram-test">
            {' '}
            Instagram Test{openLink}
          </a>
        </li>{' '}
        <li>
          {' '}
          <a target="_blank" href="https://github.com/richi1717/ElliesQuest">
            {' '}
            Original Ellie's Quest{openLink}
          </a>
        </li>{' '}
      </ul>
    </div>
  )
};

export const references = {
  content: (
    <div className="references">
      <h1>References</h1>
      <ul>
        {' '}
        <li>
          Herb Adams |&nbsp;{' '}
          <a
            href="mailto:hadams2@yahoo.com?Subject=Job%20Reference:%20Richi%20Jeffery"
            target="_top"
          >
            hadams2@yahoo.com
          </a>{' '}
        </li>{' '}
        <li>
          Todd Kurtz |&nbsp;{' '}
          <a target="_blank" href="tel:602-478-5884">
            602.478.5884
          </a>{' '}
          |&nbsp;{' '}
          <a
            href="mailto:toddalankurtz@yahoo.com?Subject=Job%20Reference:%20Richi%20Jeffery"
            target="_top"
          >
            toddalankurtz@yahoo.com
          </a>{' '}
        </li>{' '}
        <li>
          Brant Stuns |&nbsp;{' '}
          <a target="_blank" href="tel:602-750-1386">
            602.750.1386
          </a>{' '}
          |&nbsp;{' '}
          <a
            href="mailto:brantstuns@gmail.com?Subject=Job%20Reference:%20Richi%20Jeffery"
            target="_top"
          >
            brantstuns@gmail.com
          </a>{' '}
        </li>{' '}
        <li>
          Kevin Lanni |&nbsp;{' '}
          <a target="_blank" href="tel:424-243-6406">
            424.243.6406
          </a>{' '}
          |&nbsp;{' '}
          <a
            href="mailto:therealklanni@gmail.com?Subject=Job%20Reference:%20Richi%20Jeffery"
            target="_top"
          >
            therealklanni@gmail.com
          </a>{' '}
        </li>{' '}
        <li>
          Jon Hirsch |&nbsp;{' '}
          <a target="_blank" href="tel:760-419-2881">
            760.419.2881
          </a>{' '}
          |&nbsp;{' '}
          <a
            href="mailto:jon.hirsch@csaa.com?Subject=Job%20Reference:%20Richi%20Jeffery"
            target="_top"
          >
            jon.hirsch@csaa.com
          </a>{' '}
        </li>{' '}
      </ul>
    </div>
  )
};

export const skills = {
  content: (
    <div className="skills">
      <h1>Skills</h1>
      <ul style={{ listStyle: 'none' }}>
        {' '}
        <li>React</li> <li>Javascript</li>
        <li>HTML</li> <li>SCSS</li> <li>CSS</li> <li>Node</li> <li>Express</li>{' '}
      </ul>
    </div>
  )
};

export const work = {
  content: (
    <div className="work">
      <h1>Work</h1>
      <p>CSAA AAA Insurance: 2015-Current</p>{' '}
      <ul>
        <li>
          <a
            target="_blank"
            href="https://quote.digital.csaa-insurance.aaa.com/"
          >
            Auto Quoter
            {openLink}
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://mypolicy.digital.csaa-insurance.aaa.com/login"
          >
            CSAA Login Page
            {openLink}
          </a>
        </li>
      </ul>
    </div>
  )
};

export const demo = {
  content: (
    <div className="work">
      <h1>Demos</h1>
      <ul>
        <li>
          <a target="_blank" href="https://ellies-quest-rebirth.herokuapp.com/">
            Ellie's Quest Rebirth
            {openLink}
          </a>
        </li>
        <li>
          <a target="_blank" href="https://code-flashcards.herokuapp.com/">
            Study Flashcards
            {openLink}
          </a>
        </li>
      </ul>
    </div>
  )
};

export const contact = {
  content: (
    <div className="contact">
      <h1>Contact</h1>
      <p>
        Phone |&nbsp;{' '}
        <a target="_blank" href="tel:602-334-3470">
          602.334.3470
        </a>{' '}
      </p>
      <p>
        Email |&nbsp;{' '}
        <a
          href="mailto:richi1717@gmail.com?Subject=Potential%20Job,%20Liked%20Your%20Site"
          target="_top"
        >
          richi1717@gmail.com
        </a>{' '}
      </p>
    </div>
  )
};
