import React from 'react'
import './App.css'
import Question from './Question';

export default function App() {

  return (
    <>
      <h1 className='title'>Accordion Project</h1>
      <div className='container'>
        <h2 className='container-title'>Frequently Asked Questions</h2>
        <div className="questions">
          <div className="question">
            {faq.map(question => (
              <Question key={question.id} title={question.title} info={question.info} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const faq = [
  {
    id: 1,
    title: 'What is the Virtual DOM?',
    info: 'A lightweight JavaScript object which is a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. The React \'render\' function creates a node tree out of the React components',
  },
  {
    id: 2,
    title: 'What is JSX',
    info: 'JSX is shorthand for \'Javascript XML\' which utilizes the expressiveness of JavaScript along with the easy readability of HTML',
  },
  {
    id: 3,
    title: 'What are components in React?',
    info: 'Components are building blocks that split up the UI into discrete, reusable pieces. Each component is rendered independent of one another.',
  },
  {
    id: 4,
    title: 'What are props?',
    info: 'Props (or properties) are read-only, immutable components. They are always passed down from parent to child components.',
  },
  {
    id: 5,
    title: 'What is state?',
    info: 'Objects which serve as sources of data and determine component rendering and behavior. Unlike props, they are mutable.',
  },
]
