import 'katex/dist/katex.min.css';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MediaAndText from '@/src/MediaAndTextGrid';
import Divider from '@mui/material/Divider';
import Math from '@/src/katex/Math';
import '@/styles/katexCustom.css';
import { eq, mt, ref, mtx } from '@/src/katex/supportFunction';
 
import Section from '@/src/katex/SectionClass';
import { SectionType } from '@/src/types';
 
import SectionsMenusLayout from '@/src/SectionsMenusLayout';

const pageName = 'proper-time';

export default async function Page() {

  let sections = new Section('Length, Time and Proper Time');

  let introduction = sections.addSection('Introduction');

  introduction.setContent(<>
  <p> In this section, we will explore how distance and time between two events are measured differently in two systems moving relative to each other. 
    Moreover, we will introduce the concept of proper time, which is the intrinsic time measured by an observer at rest in one reference frame. </p><p>
    These principles are fundamental consequences of the Lorentz equations and will be pivotal in our discussion of the Twin Paradox.</p>
  </>);

  let sectionsToRender: SectionType = sections.getSections();
  
  return (
    <>
      <SectionsMenusLayout   mainSection={sectionsToRender} />
    </>
  );
}

