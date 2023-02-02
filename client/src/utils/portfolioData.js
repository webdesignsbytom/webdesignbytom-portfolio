import Portfolio1 from '../assets/images/tavyepoxyfull.png';
import Portfolio3 from '../assets/images/bioclickerfull.png';
import Portfolio2 from '../assets/images/portfolio2.jpg';
import Portfolio4 from '../assets/images/portfolio4.jpg';
import Portfolio5 from '../assets/images/portfolio5.png';
import ReactIcon from '../assets/images/react.svg';
import HTML5Icon from '../assets/images/html5.svg';
import TailwindIcon from '../assets/images/tailwindcss-icon.svg';
// TODO: make this primary data source
export const portfolioData = [
  {
    id: 1,
    image: Portfolio1,
    title: 'TavyEpoxy Furniture Sales',
    github: 'https://github.com/webdesignbytom/tavy_epoxy',
    demo: 'https://strong-tulumba-d852ca.netlify.app/',
    icons: [ReactIcon],
    images: [Portfolio1, Portfolio1, Portfolio1],
    skills: ["Responsive Gallery", "3D Design Tool", "Image Slider on loop"],
    desc: 'TavyEpoxy, or Tav-E-poxy is a business i run selling my spare artwork as tables. The website was created to display a gallery of possiblities and attract interest in similar designs from customers. The key to getting customers is to make it easy for them to compare the designs in my gallery and the materails available to make orders based on what they find attractive. To address this i have made contact forms with various basic options for quote requesting. Along with a design tool where customers can create a 3D render of the furniture dimensions and artistic patterns desired.',
    featuredComponent: '3D Design Tool'
  },
  {
    id: 2,
    image: Portfolio2,
    title: 'Matched Betting information and training game',
    github: 'https://github.com/webdesignbytom/matched-betting',
    demo: 'https://lively-brioche-882d33.netlify.app/',
    icons: [ReactIcon, TailwindIcon],
    images: [Portfolio1, Portfolio1, Portfolio1],
    skills: ["Algorithms", "Responsive Tutorial", "Forum/media functions"],
    desc: 'Matched Betting Training is a app mainly designed to teach a player how to make a series of bets guaranteed to make a profit using our system. It is supported by a fleshed out website of user/member systems and forums for posting tips and tricks creating a community of betters. Most site of this type feature a betting calculator and basic instructions. This site goes one further and has built dummy bookie websites to be used in our "Bet Simulator" which takes you step by step through the processes of making a winning bet.' ,
    featuredComponent: 'Bet Simulator'
  },
  {
    id: 3,
    image: Portfolio3,
    title: 'Idle-Clicker game',
    github: 'https://github.com/webdesignbytom/react-idle-clicker',
    demo: 'https://darling-marigold-5cf601.netlify.app/',
    icons: [ReactIcon],
    images: [Portfolio1, Portfolio1, Portfolio1],
    skills: ["one"],
    desc: 'Bio-Clikcer a react based idle clicker game. Based on hugely populat phone and browser idle clicker games. This involves a huge amount of player states and is a great example ove the abilities of using state in react. Furthermore rending items, achievements and buildings like they were items in an online store. The player data is all collected and saved to localstorage and server databases for using various devices. Every element on the page is subject to rerendering and has been smoothly layed out to prevent overloading issues',
    featuredComponent: 'Game'
  },
  {
    id: 4,
    image: Portfolio4,
    title: 'Luxury Casino',
    github: 'https://github.com/webdesignbytom/luxury-casino',
    demo: 'https://github.com',
    icons: [HTML5Icon],
    images: [Portfolio1, Portfolio1, Portfolio1],
    skills: ["one"],
    desc: 'Luxury Casino is a vanilla javascript project i have been building to keep my skills sharp on the basic sides of code without frontend libraries. It is also being specially built to accomidate a circuit board controlled poker chip that will act as you bet button for online gaming. It features account requirements and deposits for banking and gaming. Currently only plays poker but will be adpted to suit all card games. You can choose seats around a table and play texas holdem against up to 5 other players. Dealer position moves around the board. Stats are recorded for player development',
    featuredComponent: 'Card Trick'
  },
];
