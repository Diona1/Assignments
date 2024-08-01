import React from 'react';
import './App.css';
import Card from './Card';

import logo1 from './images/first.png';
import logo2 from './images/second.png';
import logo3 from './images/third.png';
import logo4 from './images/fourth.png';
import logo5 from './images/five.png';
import logo6 from './images/six.png';
import logo7 from './images/seven.png';
import logo8 from './images/eight.png';
import logo9 from './images/first.png';

const data = [
  { id: 1, title: 'The TLD', description: 'Determine the domain name extension.', logoSrc: logo1 },
  { id: 2, title: 'Domain length', description: 'Check if your domain name is short enough to remember.', logoSrc: logo2 },
  { id: 3, title: 'Language', description: 'Ensure the name is easy to pronounce in the desired domain.', logoSrc: logo3 },
  { id: 4, title: 'International recognition', description: 'See how your domain name works in other countries.', logoSrc: logo4 },
  { id: 5, title: 'Search engine', description: 'See how visible your domain name is on search engines.', logoSrc: logo5 },
  { id: 6, title: 'Advertising potential', description: 'Check how strong the name is for marketing purposes.', logoSrc: logo6 },
  { id: 7, title: 'Sales Opportunities', description: 'Check how sales can be used on your domain name.', logoSrc: logo7 },
  { id: 8, title: 'Type susceptibility', description: 'Check the risk of mistyping the domain name.', logoSrc: logo8 },
  { id: 9, title: 'Business potential', description: 'Calculate the added value for your company/business.', logoSrc: logo9 },
];

const App = () => {
  return (
    <div className="container">
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          logoSrc={item.logoSrc}
        />
      ))}
    </div>
  );
};

export default App;


