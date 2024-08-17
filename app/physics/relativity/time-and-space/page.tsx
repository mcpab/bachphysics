import Stack from '@mui/material/Stack';
import 'katex/dist/katex.min.css';
import Container from '@mui/material/Container';
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
import { eq, mt, ref, mtx } from '@/src/katex/supportFunction';
import MathSection from '@/src/katex/MathSection';

const pageName = 'time-and-space';

export default async function Page() {

  return (

    <>

      <Stack spacing={24} className=" items-center space-y-6">

        <Container><h1 className='text-5xl'  >The Lorentz Transformation of Time and Space</h1></Container>

        <MathSection>

          <h2  >Introduction</h2>
          <section>In his seminal article, Einstein elegantly derived the Lorentz transformation for time and space between systems moving at constant relative velocity. His original derivation assumed
            that the relative velocity was aligned with the <em>x</em>-axis, and implicitly considered the measurement of length perpendicular to this velocity direction
            to be consistent in both systems. In this section, we will follow Einstein reasoning and extend the derivation to a more general case—a boost in any arbitrary direction.</section>
          <section>Our goals are as follows:</section>
          <ol>
            <li><strong>General Boost Transformation:</strong>
              <ul>
                <li>We will derive the Lorentz transformation for a general boost, where the relative velocity is represented by an arbitrary vector.</li>
                <li>This broader approach allows us to handle boosts in any direction, not just along the <em>x</em>-axis.</li>
              </ul>
            </li>
            <li><strong>Preserving Length Perpendicular to Velocity:</strong>
              <ul>
                <li>We will explicitly discuss the conditions that ensure the preservation of lengths perpendicular to the velocity direction.</li>
                <li>This consideration is crucial for maintaining consistency across reference frames.</li>
              </ul>
            </li>
            <li><strong>Time Transformation via Clock Synchronization:</strong>
              <ul>
                <li>Following Einstein original method, we will derive the transformation of time based on clock synchronization.</li>
                <li>This step lays the foundation for our subsequent analysis.</li>
              </ul>
            </li>
            <li><strong>Lorentz Transformation for Time and Space:</strong>
              <ul>
                <li>Leveraging the invariance of the speed of light, we will derive a concise expression for both time and space transformations.</li>

              </ul>
            </li>
          </ol>
          <section><strong>Assumptions and Prerequisites:</strong> We assume that readers are familiar with advanced calculus, linear algebra, and the fundamental principles of Special Relativity.
            We will make use of the bra-ket notation, which readers can get familiar with <Link href='https://en.wikipedia.org/wiki/Bra%E2%80%93ket_notation'>here</Link>.</section>

        </MathSection>

        <MathSection>

          <h2>Synchronization of Clocks</h2>
          <section>
            In  Special Relativity, the concept of clock synchronization assumes a pivotal role in developing the Lorentz transformation of time and space.
            Although seemingly straightforward, we will delve into a detailed explanation of this fundamental concept, as defining synchronization becomes essential for determining when events occur simultaneously.

            Let us delve into the starting point of our exploration. Imagine two observers, A and B, both at rest within the same reference system but positioned at different locations.
            These observers, A and B, each have their own clocks, measuring time independently.
          </section>


          <section> Now, let us imagine an experiment where a photon is emitted from A, travels to B, and gets reflected back to its origin in A.
            Observer A records the time of emission as <Math math='t_1' />, while observer B notes the time of reflection as {mt("t_2")}. Finally, A marks the time of the photon arrival as {mt("t_3")}.
            We assume that both A and B have access to each other time recordings (for example they would exchange data after the experiment).
            <section>A possible outcome of this experiment could be as per the  table below (units of time are not relevant in this discussion):</section>
          </section>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center"> Time in A</TableCell>
                  <TableCell align="center"> Time in B</TableCell>
                  <TableCell align="center"> Event</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center"> 1</TableCell>
                  <TableCell align="center"> 2</TableCell>
                  <TableCell align="center"> Emission, {mt("t_1= 1")}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"> 3</TableCell>
                  <TableCell align="center"> 4</TableCell>
                  <TableCell align="center"> Reflection, {mt("t_2= 4")}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"> 5</TableCell>
                  <TableCell align="center"> 6</TableCell>
                  <TableCell align="center"> Arrival, {mt("t_3= 5")}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <section> If the observer at point B  used the time difference {mt('t_2 - t_1')} to compute the time needed for the photon to reach B, they would obtain an incorrect result of 3 instead of the actual value of 2.
            More worrisome, the time difference {mt('(t_3 - t_2')} would be 1, indicating a relative motion of the two observer which are at rest in the same reference system.
            These discrepancies occurs because the two clocks are not synchronized. </section>
          <section>

            The way for B to synchronize their clock with A is to record the time stamp {mt('t_1')}, wait for the photon to get back to A, ask A for {mt('t_3')}, and set the clock in B such that:


            {eq('t_2-t_1 = t_3-t_2')}

            which is realized in this case by setting their clock back 1 unit.

          </section>
          <section> The synchronization of clocks is essential for determining how time and space are measured when we consider events observed by two systems of reference now in motion with respect to each other. This is the subject of the next sections.</section>

        </MathSection>

        <MathSection>

          <h1>Transformation of Time</h1>


          <h2>The mirror Experiment</h2>

          <section> Let us explore the mirror experiment from the perspective of a new reference frame. In this scenario, the mirror and the emitting source are both at rest within a system of reference {mt("F'")}, which itself is in motion relative to another system of reference {mt("F")}.
            Observers in {mt("F")} measure time and distance as {mt("t")} and {mt("x_1,x_2,x_3")}, while observers in {mt("F")} measure time and distance as {mt("t'")} and {mt("x'_1,x'_2,x'_3")}. We assume that at time zero the origin of the systems coincide. </section>

          <Divider className='text-sm'> Experiment Observed from {mt("F'")} </Divider>

          <MediaAndText imageSrc='/img/movingframes.jpg' imageSize={60} caption={<div>Fig 1:Photon Emission and Reflection in {mt("F'")}</div>}> The source is located at the origin of {mt("F'")} and the mirror is
            positioned at a fixed distance along an arbitrary direction.
            A photon is emitted at a time {mt("t'_{0}")},  it reaches the mirror at time {mt("t'_{1}")}   where it is reflected, and it arrives back at the source at time {mt("t'_{2}")}. As we assume that the clocks in {mt("F'")} are synchronized, the following relation holds true:
            {eq("\\frac{1}{2}(t'_{0}+t'_{2}) = t'_{1} ","clock synchronization", pageName)}

          </MediaAndText>

          <Divider className='text-sm'> Experiment Observed from {mt("F")} </Divider>
          <section> Now we examine the three events—emission, reflection, and arrival back at the source—from the viewpoint of reference frame {mt("F")}.
            It is crucial to emphasize that all time, velocity, and distance quantities in this section <i>are assumed to be measured within the system of reference</i> {mt("F")}.
          </section>

          <section>The photon is emitted from the source at time {mt("t_{0}")} and at the position {mt("{\\textbf v}t_{0}")}  where {mt("\\textbf v")} is the velocity of {mt("F'")} measured from {mt("F")}. </section>

          <MediaAndText imageSrc='/img/movingframes1.jpg' imagePosition='right' imageSize={60} caption={<div>Fig 2:Velocities and positions of the photon seen from {mt("F")}</div>}>

            The photon travels to the mirror with speed {mt("\\textbf c_{up}=\\textbf c_{1}+\\textbf v")}, and it  reaches it at a time:
            {eq(" t_{1} = t_{0} +\\frac{l}{| {\\textbf c_{1} } |} = t_{0} +\\frac{l}{| {\\textbf c_{up}-\\textbf v} |} ")}
            where {mt("l")} is the distance of the mirror from the source measured from {mt("F")}, and {mt("\\textbf c_1")} is the photon velocity in {mt("F'")} as observed in {mt("F")}. When the photon reaches the mirror its position will be
            {eq("{\\textbf v}\\, t_{1} + ({\\textbf  c_{up}- \\textbf v})(t_{1}-t_{0}) = {\\textbf v}t_{0}+ l\\frac{\\textbf c_{up} }{| {\\textbf  c_{up}-\\textbf v} |}")} </MediaAndText>

          <section>

            The time {mt("t_{2}")} when the photon reaches the source back again is

            {eq(" t_{2}= t_{1} +\\frac{l}{| {\\vb c_{down}-\\vb v} |} =t_{0} + \\frac{l}{| {\\vb c_{up}-\\vb v} |}+ \\frac{l}{| {\\vb c_{down}-\\vb v} |} ")}

            where {mt("\\vb c_{down}")} is the photon velocity returning to the source. The position of the photon when it meets the source is, {eq("{\\vb v}t_{2}= {\\vb v}t_{0}+{\\vb v}\\,  \\frac{l}{| {\\vb c_{up}-\\vb v} |}+ \\frac{l}{| {\\vb c_{down}-\\vb v} |}.")}
            To derive the Lorentz transformation, we will assume the existence of a functional relationship between {mt("t'")} and {mt("t")},

            {eq(" t': F \\rightarrow R ")}
            {eq(" t'=t'(\\vb x,t)")}

            and formally, the events of emission, reflection and meeting the source again will be observed in {mt("F'")} as

            {eq(mtx("split", "t'_{0}&=t'({\\vb v}\\, t_{0} ,t_{0})",
              "t'_{1}&=t'({\\vb v}t_{0}+ l\\frac{\\vb c_{up} }{\|{\\vb  c_{up}-\\vb v} \|}  , t_{0} + \\frac{l}{\|{\\vb  c_{up}-\\vb v} \|} ) ",
              "t'_{2}&=t'( {\\vb v}t_{0}+{\\vb v}\\, l(\|{\\vb  c_{up}-\\vb v} \|^{-1}+ \\,\|{\\vb  c_{down}-\\vb v} \|^{-1}) ,  t_{0} + l(\\,\|{\\vb  c_{up}-\\vb v} \|^{-1}+ \\,\|{\\vb  c_{down}-\\vb v} \|^{-1})   ) "))}

            expanding the function {mt("f(l): R \\rightarrow R")},

            {eq(" f(l) = t'({\\vb v}t_{0}+ l\\frac{\\vb c_{up} }{\|{\\vb  c_{up}-\\vb v} \|}  , t_{0} + \\frac{l}{\|{\\vb  c_{up}-\\vb v} \|} ) ")}

            in Taylor series around zero we obtain,

            {eq(" t'_1 = t'({\\vb v}\\, t_{0} ,t_{0})  + l  \|{\\vb  c_{up}-\\vb v} \|^{-1} \\braket{\\grad  t' | ({\\vb c_{up}},1)} +o(l^2).")}

            A similar expression holds true for  {mt("t'_2")},
            {eq("t'_{2}=t'({\\vb v}\\, t_{0}) +  l(\\,\|{\\vb  c_{up}-\\vb v} \|^{-1}+ \|{\\vb  c_{down}-\\vb v} \|^{-1})  \\braket{ \\grad  t' | ({\\vb v},1)} +o(l^2)")}

            Using the synchronization condition of {ref('clock synchronization',pageName)}, we arrive at the differential equation in {mt("t'")} (for {mt("l \\to 0")}),

            {eq("              \\braket{\\grad t'|\\vb w}=0              ")}

            where,

            {eq("{\\vb w} = (\\vb v(|{\\vb c_{up}-\\vb v} |^{-1}+ |{\\vb c_{down}-\\vb v} |^{-1}) - 2 {\\vb c_{up}}|{\\vb c_{up}-\\vb v} |^{-1},  |{\\vb c_{up}-\\vb v} |^{-1}- |{\\vb c_{down}-\\vb v} |^{-1}). ")}
            Assuming a linear relationship between the time in {mt("F'")} and the coordinates in {mt("F")} as,

            {eq("t' = {\\vb p}\\cdot \\vb x+\\beta t ")}

            where {mt("{\\vb p}")} is a vector transforming the spatial coordinates and {mt("\\beta")} is the coefficient transforming time, we arrive at the linear equation in {mt("{\\vb p}")} and {mt("\\beta")}

            {eq("{\\vb p}\\cdot [ {\\vb v}  (\|{\\vb  c_{up}-\\vb v} \|^{-1}+ \|{\\vb  c_{down}-\\vb v} \|^{-1}) - 2 {\\vb  c_{up}}\|{\\vb  c_{up}-\\vb v} \|^{-1}] + \\beta(\|{\\vb  c_{up}-\\vb v} \|^{-1} - \,\|{\\vb  c_{down}-\\vb v} \|^{-1}) =0", "condition on p",pageName)}

          </section>

          <MediaAndText imageSrc='/img/fig1.png' imagePosition='right' imageSize={50} caption="Fig 3:The photon velocities">

            The {ref("condition on p",pageName)}  can be further simplified if we look in detail to the direction of the vectors {mt("{\\vb v}")}, {mt("{\\vb c_{down}}")} and {mt("{\\vb c_{up}}")}.
            Since the photon in {mt("F'")} follows the same direction going to the mirror and back to the source, {mt("{\\vb c_{down} -\\vb v}")} and {mt("{\\vb c_{up}-\\vb v}")} are parallel, but have different magnitude;
            hence {mt("{\\vb c_{up}}")}, {mt("{\\vb c_{down}}")} and {mt("{\\vb v}")} are all in the same plane, see Fig (3).
            In the system of reference of three mutually orthogonal unit vectors {mt("{\\vb e}_1")}, {mt("{\\vb e}_2")}, and {mt("{\\vb e}_3")}, with {mt("{\\vb e}_1")} and {mt("{\\vb e}_2")} in the same plane of {mt("{\\vb c_{up}}")} and {mt("{\\vb v}")},
            and {mt("{\\vb e}_1")} in the same direction of {mt("\\bf v")}, the vector {mt("\\bf p")} has components,
            {eq(" {\\vb p} = p_1{\\vb e_1} + p_2{\\vb e_2} + p_3 \\,{\\vb e_3}    ")} and equation  {ref("condition on p",pageName)} simplifies to

          </MediaAndText>


          <section>

            {eq(" {\ p_1} { v} (|{\\vb c_{up}-\\vb v} |^{-1}+ |{\\vb c_{down}-\\vb v} |^{-1}) - 2 { c}(p_1\\cos\\alpha+p_2\\sin\\alpha)|{\\vb c_{up}-\\vb v} |^{-1} +\\beta(|{\\vb c_{up}-\\vb v} |^{-1} - | {\\vb c_{down}-\\vb v} |^{-1}) =0")}

            as {mt("p_3")} can be set to zero as it is orthogonal to the plane of {mt("{\\vb c_{down}}")} and {mt("{\\vb v}")}. From {eq("\\cos\\alpha = \\frac{c ^ 2 + v ^ 2 - | {\\vb c_{up}-\\vb v} |^2 }{2 v c} ")} we arrive at

            {eq("p_1 \\frac{c ^ 2}{v} +\\beta +p_2 \\,\\,\\frac{2c\\sin\\alpha |{\\vb c_{up}-v} |}{| {\\vb c_{up}-v} |-|{\\vb c_{down}-v} |} =0\\quad\\forall \\alpha,v ")}

            which has solutions

            {eq(mtx("matrix", "p_1=-\\beta\\frac{v}{c ^ 2}", " p_2=0"))}

            The transformation of time between {mt("F'")} and {mt("F")} becomes then

            {eq("ct' = \\beta \\left(-\\frac{v}{c} \\braket{{\\vb e}_1|\\vb x}+ct \\right)", "transformation of time",pageName)}

            where {mt("\\beta")} is a constant depending on the velocity.

          </section>

        </MathSection>

        <MathSection>

          <h1>Transformation of Space</h1>
          <h2>General Form of the Lorentz Transformation</h2>
          <section>

            The Lorentz transformation describes how the coordinates and the time of the same event observed in {mt("F")} and {mt("F'")} are related to each other, and it is assumed to be linear
            {eq(" {\\vb X'} = {\\bf\\Lambda}({\\vb v}) {\\vb X}")}

            where {mt("{\\bf \\Lambda} ({\\vb v})")} is a matrix depending only on the velocity vector {mt("\\vb v")}, and {mt("{\\vb X}")} is the so-called four-vector {eq(" \\vb X= (x_1,x_2,x_3,c t).")}
            A four-vector can be represented as sum of ket vectors formed from a unitary triplet of orthogonal vectors {mt("\\vb e_1")}, {mt("\\vb e_2")} and {mt("\\vb e_3")}, with {mt("\\vb e_1")} chosen parallel to {mt("\\vb v")}
            {eq("   \\vb X = x_1 \\ket{\\vb{e}_1,0} + x_2   \\ket{\\vb{e}_2,0} + x_2 \\ket{\\vb{e}_3,0} + ct \\ket{\\vb{0},1}   ")}
            and the Lorentz transformation {mt("{\\bf \\Lambda}({\\vb v})")} in its most general form becomes

            {eq(mtx("matrix", "\\lambda_{1, 1} \\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0} &+& \\lambda_{1, 2}\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_2,0} &+&\\lambda_{1, 3}\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_3,0}  &+&\\lambda_{1, 4}\\ket{\\vb{e}_1,0}\\bra{\\vb{0},1}",

              "\\lambda_{2, 1} \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_1,0} &+& \\lambda_{2, 2}\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0} &+&\\lambda_{2, 3}\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_3,0}  &+&\\lambda_{2, 4}\\ket{\\vb{e}_2,0}\\bra{\\vb{0},1}",

              "\\lambda_{3, 1} \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_1,0} &+& \\lambda_{3, 2}\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_2,0} &+& \\lambda_{3, 3}\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0} &+& \\lambda_{3, 4}\\ket{\\vb{e}_3,0}\\bra{\\vb{0},1} ",
              "\\lambda_{4, 1} \\ket{\\vb{0},1}\\bra{\\vb{e}_1,0}   &+& \\lambda_{4, 2}\\ket{\\vb{0},1}\\bra{\\vb{e}_2,0}   &+& \\lambda_{4, 3}\\ket{\\vb{0},1}\\bra{\\vb{e}_3,0}   &+&\\lambda_{4, 4}\\ket{\\vb{0},1}\\bra{\\vb{0},1} "), "general form of Lorentz transformation",pageName)}

            where {mt("\\lambda_{i,j}")} are sixteen free parameters. The  {ref('transformation of time',pageName)} can be utilized to identify some of the  {mt("\\lambda_{i,j}")} but not all of them:
            assumptions need to be made on how events are observed in {mt("F")} and {mt("F'")} to restrict the possible choices for {mt("\\lambda_{i,j}")}.

          </section>

          <Divider> The transformation of time </Divider>

          <section>
            The transformation {mt("{\\bf \\Lambda}({\\vb v})")} applied to a  four-vector with only a time component: {mt("\\vb X = x_4 \\ket{\\vb{0},1}")} gives,

            {eq("{\\bf \\Lambda}\\, x_4 \\ket{ \\vb{0},1} =x_4(\\lambda_{1, 4}\\ket{\\vb{e}_1,0}+\\lambda_{2, 4}\\ket{\\vb{e}_2,0} +\\lambda_{3, 4}\\ket{\\vb{e}_3,0} +\\lambda_{4, 4}\\ket{ \\vb{0},1})")}

            but from the {ref('transformation of time',pageName)} there are only components along {mt("\\vb e_1")} and time, hence {mt("\\lambda_{2,4}=\\lambda_{3,4}=0")}.
          </section>

          <Divider> First assumption: preserve direction along {mt("\\vb e_1")} </Divider>

          <section>

            The first assumption we make is that the direction {mt("\\vb e_1")} is invariant, meaning that an event in {mt("F")} with components only along {mt("\\vb e_1")} will not have components along the other directions in {mt("F'")}.
            Given an event {mt("\\vb X =  x_1\\ket{\\vb{ e}_1,0} + x_4 \\ket{ \\vb{ 0},1}")}, its transformation in {mt("F'")} will be,

            {eq("{\\bf \\Lambda}({\\vb v}) ( x_1\\ket{\\vb{e}_1,0} + x_4 \\ket{ \\vb{0},1}) = x_1\,(\\lambda_{1, 1}\\ket{\\vb{e}_1,0}+\\lambda_{2, 1}\\ket{\\vb{e}_2,0}" +
              "\\lambda_{3, 1}\\ket{\\vb{e}_3,0} +\\lambda_{4, 1}\\ket{ \\vb{0},1}) +x_4(\\lambda_{1, 4}\\ket{\\vb{e}_1,0} +\\lambda_{4, 4}\\ket{ \\vb{0},1})")}

            this results in {mt("\\lambda_{2,1}=\\lambda_{3,1}=0")} to satisfy our assumption. The {ref('general form of Lorentz transformation',pageName)}  further simplifies as,

            {eq(mtx("matrix", "\\lambda_{1, 1} \\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0} & + & \\lambda_{1, 2}\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_2,0}& + &\\lambda_{1, 3}\\ket{\\vb{e}_1,0}\\bra{\\vb{e}_3,0}& + &\\lambda_{1, 4}\\ket{\\vb{e}_1,0}\\bra{\\vb{0},1}",

              " & + & \\lambda_{2, 2}\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}& + &\\lambda_{2, 3}\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_3,0}& + & ",

              " & + & \\lambda_{3, 2}\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_2,0}& + &   \\lambda_{3, 3}\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}& + & ",

              "\\lambda_{4, 1} \\ket{\\vb{0},1}\\bra{\\vb{e}_1,0} & + & \\lambda_{4, 2}\\ket{\\vb{0},1}\\bra{\\vb{e}_2,0}& + & " +
              "\\lambda_{4, 3}\\ket{\\vb{0},1}\\bra{\\vb{e}_3,0}& + & " +
              "\\lambda_{4, 4}\\ket{\\vb{0},1}\\bra{\\vb{0},1}"))}

          </section>

          <Divider> Second assumption: invariance orthogonal to {mt("\\vb e_1")} </Divider>

          <section>
            The second assumption needed is that the spatial components along {mt("\\ket{\\vb{e}_2,0}")} and {mt("\\ket{\\vb{ e}_3,0}")} of any event preserve their direction  and length
            under {mt("{\\bf \\Lambda}({\\vb v})")}. For an event  {mt("\\vb X =  x_2\\ket{ \\vb{ e}_2,0}+x_3\\ket{ \\vb{ e}_3,0}")}, the corresponding event in {mt("F'")} will be,

            {eq("{\\bf \\Lambda}({\\vb v}) \, (x_2\\ket{ \\vb{e}_2,0}+x_3\\ket{ \\vb{e}_3,0}) = x_2\,(\\lambda_{1, 2}\\ket{\\vb{e}_1,0}+\\lambda_{2, 2}\\ket{\\vb{e}_2,0} +\\lambda_{3, 2}\\ket{\\vb{e}_3,0}) +" +
              "x_3\,(\\lambda_{1, 3}\\ket{\\vb{e}_1,0}+\\lambda_{2, 3}\\ket{\\vb{e}_2,0} +\\lambda_{3, 3}\\ket{\\vb{e}_3,0}).")}
            Our assumptions is satisfied if {mt("\\lambda_{1,2}=\\lambda_{1,3}=\\lambda_{2,3}=\\lambda_{3,2}=0")} and {mt("\\lambda_{2,2}=\\lambda_{3,3}=1")}, which results in a further simplification of {mt("{\\bf \\Lambda}({\\vb v})")}:

            {eq(mtx("matrix", "\\lambda_{1, 1} \\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0} & + & &\\lambda_{1, 4}\\ket{\\vb{e}_1,0}\\bra{\\vb{0},1} ",
              "+& \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}& ",
              "&+& \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}& ",
              "\\lambda_{4, 1} \\ket{\\vb{0},1}\\bra{\\vb{e}_1,0} +& \\lambda_{4, 2}\\ket{\\vb{0},1}\\bra{\\vb{e}_2,0}+& " +
              "\\lambda_{4, 3}\\ket{\\vb{0},1}\\bra{\\vb{e}_3,0}+& " +
              "\\lambda_{4, 4}\\ket{\\vb{0},1}\\bra{\\vb{0},1} "))}

            Using the {ref('transformation of time',pageName)}, we arrive at the final functional form of {mt("{\\bf \\Lambda}({\\vb v})")}

            {eq("{\\bf \\Lambda}({\\vb v})= \\lambda_{1, 1} \\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0} + \\lambda_{1, 4}\\ket{\\vb{e}_1,0}\\bra{\\vb{0},1}+ \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}+ \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0} -\\beta\\frac{v} {c} \\ket{\\vb{0},1}\\bra{\\vb{e}_1,0}" +
              "+\\beta \\ket{\\vb{0},1}\\bra{\\vb{0},1} ", "simplified Lorentz transformation",pageName)}

            Finally, the constants {mt("\\lambda_{1,1}, \\lambda_{2,2}, \\lambda_{3,3},")} and {mt("\\beta")} must be positive to  prevent  axis reflection.

          </section>

          <Divider> Third assumption: invariance of light speed </Divider>

          <section>
            In Special Relativity the spacetime interval between two events {mt("(x_1, y_1, z_1, ct_1)")} and {mt("(x_2, y_2, z_2, ct_2)")} is defined as

            {eq("\\Delta s^2 = (x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2 -c^2 (t_2-t_1)^2 ")}

            and can be written in bi-linear form as

            {eq("\\Delta s^2 = \\braket{\\vb X | \\vb M \\vb X} ")}

            where {mt("\\vb X= (x_2-x_1,y_2-y_1,z_2-z_1,c (t_2-t_1))")} and

            {eq("{\\vb M}= " + mtx("pmatrix",
              "1 & 0 & 0 & 0  ",
              "0 & 1 & 0 & 0  ",
              "0 & 0 & 1 & 0  ",
              "0 & 0 & 0 & -1"))}

            A spacetime interval measured in {mt("F'")} is linked to the same interval in {mt("F")} by the Lorentz transformation

            {eq(" \\Delta s'^2 =   \\braket{\\vb  X' | \\vb M  \\vb  X'}= \\braket{{{\\bf \\Lambda}}\\vb{X}|{\\vb M} {{\\bf \\Lambda}}\\vb{X}}\\ =\\braket{\\vb{X} | {{\\bf \\Lambda}}^T{\\vb M} {{\\bf \\Lambda}}\\vb{X}} ")}

            In the system {mt("F")} we consider a photon moving along an unitary vector {mt("\\vb n")}. The photon at time {mt("t_1")} is in the position {mt("\\vb x_1")}, and moves to the position {mt("\\vb x_1+{\\vb n}c(t_2-t_1)")} at the time {mt("t_2")}.
            The spacetime interval in {mt("F")} of the two events is identically zero,

            {eq("\\Delta s^2 = c^2(t_2-t_1)^2\\Vert{\\vb n}\\Vert^2 -c^2(t_2-t_1)^2 =0 ")}

            When we examine two events occurring along the trajectory of a photon (referred to as the photon’s world line), the spacetime interval, the spacetime interval {mt("\\Delta' s^2")} in {mt("F'")} must also be zero, assuming that the speed of light {mt("c")} remains invariant,

            {eq(" \\braket{(c(t_2 - t_1){\\vb n},c(t_2-t_1))}|{{{\\bf \\Lambda}}^T{\\vb M} {{\\bf \\Lambda}}\\cdot(c(t_2-t_1){\\vb n},c(t_2-t_1))}=0")}

            equivalent to,

            {eq("\\braket{({\\vb n},1)}|{{{\\bf \\Lambda}}^T{\\vb M} {{\\bf \\Lambda}}\\cdot({\\vb n} ,1)}=0", 'invariance of speed of light',pageName)}
            for all {mt("\\vb n")} such that  {mt("||\\vb n||=1")}.

            To solve the equation above we need {mt("{\\vb M} {{\\bf \\Lambda}}")}, which is {mt("{{\\bf \\Lambda}}")} with the time component changed sign,

            {eq("{\\vb M} {\\bf \\Lambda}({\\vb v})=" +
              "\\lambda_{1, 1} \\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0} + \\lambda_{1, 4}\\ket{\\vb{e}_1,0}\\bra{\\vb{0},1}+" +
              "\\lambda_{2, 2}\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}+" +
              "\\lambda_{3, 3}\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}" +
              "+\\beta\\frac{v} {c} \\ket{\\vb{0},1}\\bra{\\vb{e}_1,0}" +
              "-\\beta \\ket{\\vb{0},1}\\bra{\\vb{0},1}")}

            and {mt(" {{\\bf \\Lambda}}^T")} is readily obtained by exchanging the bra and ket vectors,

            {eq("{\\bf \\Lambda}({\\vb v})^T=" +
              "\\lambda_{1, 1} \\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0} + \\lambda_{1, 4}\\ket{\\vb{0},1}\\bra{\\vb{e}_1,0}+ " +
              "\\lambda_{2, 2}\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}+ " +
              "\\lambda_{3, 3}\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0} " +
              "-\\beta\\frac{v} {c} \\ket{\\vb{e}_1,0}\\bra{\\vb{0},1} " +
              "+\\beta \\ket{\\vb{0},1}\\bra{\\vb{0},1} ")}

            The product {mt("{\\bf \\Lambda}({\\vb v})^T{\\vb M} {\\bf \\Lambda}({\\vb v})")} is

            {eq(mtx("matrix",
              "(\\lambda_{1, 1}^2-\\beta^2\\frac{v ^ 2} {c ^ 2}) \\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0} + (\\lambda_{1, 1}\\lambda_{1, 4}+\\beta^2\\frac{v} {c})\\ket{\\vb{0},1}\\bra{\\vb{e}_1,0}" +
              "+ (\\lambda_{1, 1}\\lambda_{1, 4}+\\beta^2\\frac{v} {c})\\ket{\\vb{e}_1,0}\\bra{\\vb{0},1}+ ",
              "\\lambda_{2, 2}^2\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}+ " +
              "\\lambda_{3, 3}^2\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0} " +
              "+(\\lambda_{1, 4}^2-\\beta^2) \\ket{\\vb{0},1}\\bra{\\vb{0},1} "))}

            and the equation for the {ref('invariance of speed of light',pageName)}  reads,

            {eq("(\\lambda_{1, 1}^2-\\beta^2\\frac{v ^ 2} {c ^ 2}) n_1^2 + 2(\\lambda_{1, 1}\\lambda_{1, 4}+\\beta^2\\frac{v} {c})n_1+n_2^2 +n_3^2+(\\lambda_{1, 4}^2-\\beta^2) =0")}

            Choosing {mt("n_2")} or {mt("n_3=1")} and {mt("n_1=0")},

            {eq("(\\lambda_{1, 4}^2-\\beta^2) =-1")}

            Choosing {mt("n_1=\\pm 1")} and  {mt("n_2=n_3=0")},

            {eq("\\begin{gather*}(\\lambda_{1, 1}^2-\\beta^2\\frac{v ^ 2} {c ^ 2})   + 2(\\lambda_{1, 1}\\lambda_{1, 4}+\\beta^2\\frac{v} {c}) +(\\lambda_{1, 4}^2-\\beta^2) =0 \\ " +
              "(\\lambda_{1, 1}^2-\\beta^2\\frac{v ^ 2} {c ^ 2})   - 2(\\lambda_{1, 1}\\lambda_{1, 4}+\\beta^2\\frac{v} {c}) " +
              "+(\\lambda_{1, 4}^2-\\beta^2) =0\\end{gather*} ")}

            and we arrive at the system of equations

            {eq(mtx("matrix",
              "\\lambda_{1, 1}^2-\\beta^2\\displaystyle\\frac{v ^ 2} {c ^ 2} &= 1",
              "\\lambda_{1, 1}\\lambda_{1, 4}+\\beta^2\\displaystyle\\frac{v} {c} & =0",
              "\\lambda_{1, 4}^2-\\beta^2 &=-1"))}

            which has the following admissible solutions,

            {eq(mtx("split", "\\beta&=\\frac{1}{\\sqrt{1 -\\frac{v ^ 2}{c ^ 2} }} ",
              "\\lambda_{1, 1}&= \\beta  ",
              "\\lambda_{1, 4}&=-\\frac{v}{c}\\beta "))}

            The Lorentz transformation takes the final form

            {eq("{\\bf \\Lambda}({\\vb v})= " +
              "\\beta \\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0}  -\\beta\\frac{v}{c}\\ket{\\vb{e}_1,0}\\bra{\\vb{0},1}+ " +
              "\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}+\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0} " +
              "-\\beta\\frac{v} {c} \\ket{\\vb{0},1}\\bra{\\vb{e}_1,0} " +
              "+\\beta \\ket{\\vb{0},1}\\bra{\\vb{0},1}", "Lorentz transformation",pageName)}

            The inverse of {mt("\\bf \\Lambda(v)")} transforms the coordinates from {mt(" F'")} to {mt("F")} and can be readily obtained by exchanging the velocity sign, as it can be verified directly

            {eq("{\\bf \\Lambda}^{-1}({\\vb v})= \\Lambda(-{\\vb v})= " +
              "\\beta \\ket{\\vb{e}_1,0}\\bra{\\vb{e}_1,0}  +\\beta\\frac{v}{c}\\ket{\\vb{e}_1,0}\\bra{\\vb{0},1}+ " +
              "\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}+\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}" +
              "+\\beta\\frac{v} {c} \\ket{\\vb{0},1}\\bra{\\vb{e}_1,0}" +
              "+\\beta \\ket{\\vb{0},1}\\bra{\\vb{0},1} ", "inverse of Lorentz transformation",pageName)}

            The Lorentz transformation written explicitly in terms of the velocity vector, as {mt(" \\ket{\\vb{e}_1,0}=\\ket{\\vb{v},0}/v")}, reads,

            {eq("{\\bf \\Lambda}({\\vb v})=" +
              "\\frac{\\beta}{v ^ 2} \\ket{\\vb v,0}\\bra{\\vb{v},0}  -\\frac{\\beta}{c}\\ket{\\vb{v},0}\\bra{\\vb{0},1}+ " +
              "\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}+\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}" +
              "-\\frac{ \\beta} {c} \\ket{\\vb{0},1}\\bra{\\vb{v},0}" +
              "+\\beta \\ket{\\vb{0},1}\\bra{\\vb{0},1} \\ ", "Lorentz transformation in velocity",pageName)}


            When {mt("\\vb v")} has the direction of the x-axis, the transformation simplifies to the original Einstein formula


            {eq(mtx("split", "x' &= \\beta(x-vt ) \\nonumber ",
              "y'&=y\\nonumber ",
              "z'&=z\\nonumber ",
              "t'&= \\beta \\left(t-\\frac{v}{c ^ 2}x \\right)"), 'one-dimensional Lorentz transformation',pageName)}

            Finally, it can readily proven that the Lorentz transformation satisfies the condition {mt("{{\\bf \\Lambda}}^T{\\vb M} {{\\bf \\Lambda}}=\\vb M")}, hence {mt("\\Delta' s=\\Delta s")} for all events, not only those on a world line of a photon,

            {eq("\\Delta s'^2 =   \\braket{\\vb  X' | \\vb M  \\vb  X'}= \\braket{{{\\bf \\Lambda}}\\vb{X}| {\\vb M} {{\\bf \\Lambda}}\\vb{X}}=\\braket{\\vb{X} |{{\\bf \\Lambda}}^T{\\vb M} {{\\bf \\Lambda}}\\vb{X}}=\\braket{\\vb{X}| {\\vb M} \\vb{X}}=\\Delta s", "invariance of spacetime interval",pageName)}


          </section>

        </MathSection>

      </Stack>

    </>

  );
}

