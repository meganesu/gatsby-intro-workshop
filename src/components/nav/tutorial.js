/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const TutorialNav = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/part-0">Part 0:</Link></li>
    <li><Link to="/part-1">Part 1:</Link></li>
    <li><Link to="/part-2">Part 2:</Link></li>
    <li><Link to="/part-3">Part 3:</Link></li>
    <li><Link to="/part-4">Part 4:</Link></li>
    <li><Link to="/part-5">Part 5:</Link></li>
    <li><Link to="/part-6">Part 6:</Link></li>
    <li><Link to="/part-7">Part 7:</Link></li>
  </ul>
)

export default TutorialNav