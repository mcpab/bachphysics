
import Stack from '@mui/material/Stack';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import MathJax from '@/src/MathJax';
import Equation from '@/src/Equation';
 
import Link from 'next/link';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import MediaAndText from '@/src/MediaAndTextGrid';
import Divider from '@mui/material/Divider';




export default function Page() {


  return (

    <>


      <MathJax />



      <Stack spacing={24} className=" items-center space-y-6">



        <Container><h1 className='text-5xl'  >The Lorentz Transformation of Time and Space</h1></Container>

        <Container>
          <Paper elevation={3} className='p-10 leading-loose space-y-10 text-black justify-center '>

            <h2  >Introduction</h2>
            <p>In his seminal article, Einstein elegantly derived the Lorentz transformation for time and space between systems moving at constant relative velocity. 
              His original derivation assumed that the relative velocity was aligned with the <em>x</em>-axis, and implicitly considered the measurement of length perpendicular
               to this velocity direction to be consistent in both systems. In this section, we will follow Einstein\u2019s reasoning and extend the derivation to a more general case—a boost in any arbitrary direction.</p>
            <p>Our goals are as follows:</p>
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
                  <li>Following Einstein\u2019s original method, we will derive the transformation of time based on clock synchronization.</li>
                  <li>This step lays the foundation for our subsequent analysis.</li>
                </ul>
              </li>
              <li><strong>Lorentz Transformation for Time and Space:</strong>
                <ul>
                  <li>Leveraging the invariance of the speed of light, we will derive a concise expression for both time and space transformations.</li>

                </ul>
              </li>
            </ol>
            <p><strong>Assumptions and Prerequisites:</strong> We assume that readers are familiar with advanced calculus, linear algebra, and the fundamental principles of Special Relativity.
              We will make use of the bra-ket notation, which readers can get familiar with <Link href='https://en.wikipedia.org/wiki/Bra%E2%80%93ket_notation'>here</Link>.</p>

          </Paper>
        </Container>



        <Container>
          <Paper elevation={3} className='p-10 leading-loose space-y-10 text-black justify-center '>

            <h2>Synchronization of Clocks</h2>
            <p>
              In  Special Relativity, the concept of clock synchronization assumes a pivotal role in developing the Lorentz transformation of time and space.
              Although seemingly straightforward, we will delve into a detailed explanation of this fundamental concept, as defining synchronization becomes essential for determining when events occur simultaneously.
            </p>
            <p>
              Let us delve into the starting point of our exploration. Imagine two observers, A and B, both at rest within the same reference system but positioned at different locations.
              These observers, A and B, each have their own clocks, measuring time independently.
               
            </p>

            <p> Now, let us imagine an experiment where a photon is emitted from A, travels to B, and gets reflected back to its origin in A.
              Observer A records the time of emission as \(t_1\), while observer B notes the time of reflection as \(t_2\). Finally, A marks the time of the photon arrival as \(t_3\).
              We assume that both A and B have access to each other time recordings (for example they would exchange data after the experiment)</p>
            <p>A possible outcome of this experiment could be as per the  table below (units of time are not relevant in this discussion): </p>

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
                    <TableCell align="center"> Emission, \(t_1\)= 1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center"> 3</TableCell>
                    <TableCell align="center"> 4</TableCell>
                    <TableCell align="center"> Reflection, \(t_2\)= 4</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center"> 5</TableCell>
                    <TableCell align="center"> 6</TableCell>
                    <TableCell align="center"> Arrival, \(t_3\)= 5</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <p> If the observer at point B  used the time difference \(t_2 - t_1\) to compute the time needed for the photon to reach B, they would obtain an incorrect result of 3 instead of the actual value of 2.
              More worrisome, the time difference \(t_3 - t_2\) would be 1, indicating a relative motion of the two observer which are at rest in the same reference system.
              These discrepancies occurs because the two clocks are not synchronized. </p>
            <p>

              The way for B to synchronize their clock with A is to record the time stamp \(t_1\), wait for the photon to get back to A, ask A for \(t_3\), and set the clock in B such that:


              <Equation label="sync0"> t_2-t_1 = t_3-t_2  </Equation>

              which is realized in this case by setting their clock back 1 unit.

            </p>
            <p> The synchronization of clocks is essential for determining how time and space are measured when we consider events observed by two systems of reference now in motion with respect to each other. This is the subject of the next sections.</p>
          </Paper>
        </Container>


        <Container>
          <Paper elevation={3} className='p-10 leading-loose space-y-10 text-black justify-center '>

            <h1>Transformation of Time</h1>


            <h2>The mirror Experiment</h2>

            <p> Let us explore the mirror experiment from the perspective of a new reference frame. In this scenario, the mirror and the emitting source are both at rest within a system of reference \(F&#39;\), which itself is in motion relative to another system of reference \(F\).
              Observers in \(F\) measure time and distance as \(t\) and \(x_1,x_2,x_3\), while observers in \(F\) measure time and distance as \(t&#39;\) and \(x&#39;_1,x&#39;_2,x&#39;_3\). We assume that at time zero the origin of the systems coincide. </p>

            <Divider className='text-sm'> Experiment Observed from \(F&#39;\) </Divider>

            <MediaAndText imageSrc='/img/movingframes.jpg' imageSize={60} caption="Fig 1:Photon Emission and Reflection in \(F\u2019\)"> <p className=' justify-center content-center '>The source is located at the origin of
               \(F&#39;\) and the mirror is positioned at a fixed distance along an arbitrary direction.
              {cleanUp(" A photon is emitted at a time $t\u2019_{0}$,  it reaches the mirror at time $t\u2019_{1}$ where it is reflected, and it arrives back at the source at time $t\u2019_{2}$. As we assume that the clocks in $F\u2019$ are synchronized, the following relation holds true: ")}  
              {"\\begin{equation}" +
                "\\frac{1}{2}(t\u2019_{0}+t\u2019_{2}) = t\u2019_{1} \\label{sync}" +
                "\\end{equation}"}</p> </MediaAndText>


            <Divider className='text-sm'> Experiment Observed from \(F\) </Divider>
            <p> Now we examine the three events—emission, reflection, and arrival back at the source—from the viewpoint of reference frame \(F\).
              It is crucial to emphasize that all time, velocity, and distance quantities in this section <i>are assumed to be measured within the system of reference</i> \(F\).
            </p>

            <p>{cleanUp("The photon is emitted from the source at time $t_{0}$ and at the position ${\\vb v}t_{0}$  where $\\vb v$ is the velocity of $F\u2019$ measured from $F$.")} </p>
            <MediaAndText imageSrc='/img/movingframes1.jpg' imagePosition='right' imageSize={60} caption="Fig 2:Velocities and positions of the photon seen from \(F\)">
              <p>
                {cleanUp("The photon travels to the mirror with speed $\\vb c_{up}=\\vb c_{1}+\\vb v$, and it  reaches it at a time:  " +
                  "\\[ t_{1} = t_{0} +\\frac{ l}{|{\\vb c_{1} } |} = t_{0} +\\frac{ l}{|{\\vb c_{up}-\\vb v} |} \\]" +
                  "where $l$ is the distance of the mirror from the source measured from $F$, and $\\vb c_1$ is the photon velocity in $F\u2019$ as observed in $F$. When the photon reaches the mirror its position will be" +
                  "\\[{\\vb v}\\, t_{1} + ({\\vb  c_{up}- \\vb v})(t_{1}-t_{0}) = {\\vb v}t_{0}+ l\\frac{\\vb c_{up} }{|{\\vb  c_{up}-\\vb v} |}\\]")} </p> </MediaAndText>

            <p>

              {cleanUp("The time $t_{2}$ when the photon reaches the source back again is" +
                "\\[ t_{2}= t_{1} +\frac{l}{|{\vb c_{down}-\vb v} |} =t_{0} + \frac{l}{|{\vb c_{up}-\vb v} |}+ \frac{l}{|{\vb c_{down}-\vb v} |} \\]" +
                "where $\vb c_{down}$ is the photon velocity returning to the source. The position of the photon when it meets the source is, \\[{\vb v}t_{2}= {\vb v}t_{0}+{\vb v}\\,  \frac{l}{|{\vb c_{up}-\vb v} |}+ \frac{l}{|{\vb c_{down}-\vb v} |}.\\]" +
                "To derive the Lorentz transformation, we will assume the existence of a functional relationship between $t\u2019$ and $t$, " +
                "\\[ t\u2019: F \\rightarrow R \\]" +
                "\\[ t\u2019=t\u2019(\vb x,t)\\]" +
                "and formally, the events of emission, reflection and meeting the source again will be observed in $F\u2019$ as\begin{align*}" +
                "t\u2019_{0}&=t\u2019({\vb v}\\, t_{0} ,t_{0}) \\ " +
                " \\ " +
                "	t\u2019_{1}&=t\u2019({\vb v}t_{0}+ l\frac{\vb c_{up} }{\|{\vb  c_{up}-\vb v} \|}  , t_{0} + \frac{l}{\|{\vb  c_{up}-\vb v} \|} ) \\ " +
                " \\ " +
                "t\u2019_{2}&=t\u2019( {\vb v}t_{0}+{\vb v}\\, l(\|{\vb  c_{up}-\vb v} \|^{-1}+ \\,\|{\vb  c_{down}-\vb v} \|^{-1}) ,  " +
                "	t_{0} + l(\\,\|{\vb  c_{up}-\vb v} \|^{-1}+ \\,\|{\vb  c_{down}-\vb v} \|^{-1})   )" +
                "\end{align*}" +

                "expanding the function $f(l): R \\rightarrow R$," +

                " \\[ f(l) = t\u2019({\vb v}t_{0}+ l\frac{\vb c_{up} }{\|{\vb  c_{up}-\vb v} \|}  , t_{0} + \frac{l}{\|{\vb  c_{up}-\vb v} \|} ) \\]" +

                "in Taylor series of around zero we obtain, " +

                " \\[ t\u2019_1 = t\u2019({\vb v}\\, t_{0} ,t_{0})  + l  \|{\vb  c_{up}-\vb v} \|^{-1} \bra{\grad  t\u2019 }\ket{({\vb c_{up}},1)} +o(l^2).\\]  " +

                "A similar expression holds true for  $t\u2019_2$," +
                "\\[t\u2019_{2}=t\u2019({\vb v}\\, t_{0}) +  l(\\,\|{\vb  c_{up}-\vb v} \|^{-1}+ \|{\vb  c_{down}-\vb v} \|^{-1})  \bra{ \grad  t\u2019 }\ket{ ({\vb v},1)} +o(l^2)\\] " +

                "Using the synchronization condition of Eq.(\\ref{sync}), we arrive at the differential equation in $t\u2019$ (for $l \\to 0$)," +

                "\begin{equation}" +
                "\bra{\grad t\u2019}\ket{\vb w}=0" +
                "\end{equation}" +

                "where, " +

                "\\[{\vb w} = (\vb v(|{\vb c_{up}-\vb v} |^{-1}+ |{\vb c_{down}-\vb v} |^{-1}) - 2 {\vb c_{up}}|{\vb c_{up}-\vb v} |^{-1},  |{\vb c_{up}-\vb v} |^{-1}- |{\vb c_{down}-\vb v} |^{-1}). \\]" +
                "Assuming a linear relationship between the time in $F\u2019$ and the coordinates in $F$ as," +

                "\\[t\u2019 = {\vb p}\\cdot \vb x+\beta t \\]" +

                " where ${\vb p}$ is a vector transforming the spatial coordinates and $\beta$ is the coefficient transforming time, we arrive at the linear equation in ${\vb p}$ and $\beta$" +

                "\begin{equation}" +
                " {\vb p}\vdot [ {\vb v}  (\|{\vb  c_{up}-\vb v} \|^{-1}+ \|{\vb  c_{down}-\vb v} \|^{-1}) - 2 {\vb  c_{up}}\|{\vb  c_{up}-\vb v} \|^{-1}] +" +
                "\beta(\|{\vb  c_{up}-\vb v} \|^{-1} - \,\|{\vb  c_{down}-\vb v} \|^{-1}) =0" +
                "\\label{eq2}\end{equation}")}

            </p>

            <MediaAndText imageSrc='/img/fig1.png' imagePosition='right' imageSize={50} caption="Fig 3:The photon velocities">
              <p>
                {cleanUp(
                  "Equation (\\ref{eq2}) can be further simplified if we look in detail to the direction of the vectors ${\vb v}$, ${\vb c_{down}}$ and ${\vb c_{up}}$.                 " +
                  "Since the photon in $F\u2019$ follows the same direction going to the mirror and back to the source, ${\vb c_{down} -\vb v}$ and ${\vb c_{up}-\vb v}$ are parallel, but have different magnitude;" +
                  " hence ${\vb c_{up}}$, ${\vb c_{down}}$ and ${\vb v}$ are all in the same plane, see Fig (3). " +
                  "In the system of reference of three mutually orthogonal unit vectors ${\vb e}_1$, ${\vb e}_2$, and ${\vb e}_3$, with ${\vb e}_1$ and ${\vb e}_2$ in the same plane of ${\vb c_{up}}$ and ${\vb v}$, " +
                  "and ${\vb e}_1$ in the same direction of $\bf v$, the vector $\bf p$ has components ($p_3$ can be set to zero as it is orthogonal to the plane of ${\vb c_{down}}$ and ${\vb v}$) " +
                  "\\[ {\vb p} = p_1{\vb e_1} + p_2{\vb e_2} + 0 \\,{\vb e_3}    \\] and equation (\\ref{eq2}) simplifies to")} </p> </MediaAndText>
            <p>

              {cleanUp("\begin{equation} {\ p_1} { v} (|{\vb c_{up}-\vb v} |^{-1}+ |{\vb c_{down}-\vb v} |^{-1}) - 2 { c}(p_1\\cos\\alpha+p_2\\sin\\alpha)|{\vb c_{up}-\vb v} |^{-1} +\beta(|{\vb c_{up}-\vb v} |^{-1} - " +
                "|{\vb c_{down}-\vb v} |^{-1}) =0 \\label{eq3}\end{equation}" +
                "From \\[\\cos\\alpha = \frac{ c^2 +v^2 - |{\vb c_{up}-\vb v} |^2 }{ 2 v c} \\] equation (\\ref{eq3}) reads" +

                "\begin{equation}p_1 \frac{c^2}{v} +\beta +p_2 \\,\\,\frac{2c\\sin\\alpha |{\vb c_{up}-v} |}{|{\vb c_{up}-v} |-|{\vb c_{down}-v} |} =0\\quad\forall \\alpha,v \end{equation}" +

                "which has solutions \\[p_1=-\beta\frac{v}{c^2}\\]  \\[ p_2=0\\]" +

                "The transformation of time between $F\u2019$ and $F$ becomes then" +

                " \begin{equation}              ct\u2019 = \beta \\left(-\frac{ v} {c}{\vb e}_1\\cdot\vb x+ct \\right) \\label{timeT}              \end{equation}" +

                "where $\beta$ is a constant depending on the velocity.")}

            </p>

          </Paper>
        </Container>

        <Container>
          <Paper elevation={3} className='p-10 leading-loose space-y-10 text-black justify-center '>
            <h1>Transformation of Space</h1>
            <h2>General Form of the Lorentz Transformation</h2>
            <p>

              {cleanUp("The Lorentz transformation describes how the coordinates and the time of the same event observed in $F$ and $F\u2019$ are related to each other, and it is assumed to be linear" +
                "\begin{equation} {\vb* X\u2019} = {\bf\Lambda}({\vb* v}) {\vb* X} \\label{tran11}\end{equation}" +

                "where $\vb \Lambda({\vb v})$ is a matrix depending only on the velocity vector $\vb v$, and ${\vb* X}$ is the so-called four-vector \\[ \vb* X= (x_1,x_2,x_3,c t).\\]" +
                "A four-vector can be represented as sum of ket vectors formed from a unitary triplet of orthogonal vectors $\vb e_1$, $\vb e_2$ and $\vb e_3$, with $\vb e_1$ chosen parallel to $\vb v$ " +
                "\\[   \vb* X = x_1 \ket{\vb{e}_1,0} + x_2   ket{\vb{e}_2,0} + x_2 ket{\vb{e}_3,0} + ct ket{\vb{0},1}   \\]" +
                "and the Lorentz transformation $\vb \Lambda({\vb v})$ in its most general form becomes" +

                "\begin{equation} \begin{matrix} " +
                "\lambda_{1,1} \ket{\vb{e}_1,0}\bra{\vb{e}_1,0} &+& \lambda_{1,2}\ket{\vb{e}_1,0}\bra{\vb{e}_2,0} &+&\lambda_{1,3}\ket{\vb{e}_1,0}\bra{\vb{e}_3,0}  &+&\lambda_{1,4}\ket{\vb{e}_1,0}\bra{\vb{0},1} \\ " +

                "\lambda_{2,1} \ket{\vb{e}_2,0}\bra{\vb{e}_1,0} &+& \lambda_{2,2}\ket{\vb{e}_2,0}\bra{\vb{e}_2,0} &+&\lambda_{2,3}\ket{\vb{e}_2,0}\bra{\vb{e}_3,0}  &+&\lambda_{2,4}\ket{\vb{e}_2,0}\bra{\vb{0},1} \\ " +

                "\lambda_{3,1} \ket{\vb{e}_3,0}\bra{\vb{e}_1,0} &+& \lambda_{3,2}\ket{\vb{e}_3,0}\bra{\vb{e}_2,0} &+& \lambda_{3,3}\ket{\vb{e}_3,0}\bra{\vb{e}_3,0} &+& \lambda_{3,4}\ket{\vb{e}_3,0}\bra{\vb{0},1} \\ " +
                "\lambda_{4,1} \ket{\vb{0},1}\bra{\vb{e}_1,0}   &+& \lambda_{4,2}\ket{\vb{0},1}\bra{\vb{e}_2,0}   &+& \lambda_{4,3}\ket{\vb{0},1}\bra{\vb{e}_3,0}   &+&\lambda_{4,4}\ket{\vb{0},1}\bra{\vb{0},1} \\ " +
                " \end{matrix} \\label{generalLambda} \end{equation}" +

                "where $\lambda_{i,j}$ are sixteen free parameters. The transformation of time $\\ref{timeT}$ can be utilized to identify some of the  $\lambda_{i,j}$ but not all of them: " +
                "assumptions need to be made on how events are observed in $F$ and $F\u2019$ to restrict the possible choices for $\lambda_{i,j}$. ")}

            </p>

            <Divider> The transformation of time </Divider>

            <p>
              {cleanUp("The transformation $\vb \Lambda({\vb v})$ applied to a  four-vector with only a time component: $\vb* X = x_4 ket{\vb{0},1}$ gives," +

                "\begin{equation}                \vb \Lambda\\, x_4 \ket{ \vb{ 0},1} =x_4(\lambda_{1,4}\ket{\vb{ e}_1,0}+\lambda_{2,4}\ket{\vb{ e}_2,0} +\lambda_{3,4}\ket{\vb{ e}_3,0} +\lambda_{4,4}\ket{ \vb{ 0},1})                \end{equation}" +

                "but from the transformation of time $\\ref{timeT}$ there are only components along $\vb e_1$ and time, hence $\lambda_{2,4}=\lambda_{3,4}=0$.")}
            </p>

            <Divider> First assumption: preserve direction along \(\vb e_1\) </Divider>

            <p>

              {cleanUp("The first assumption we make is that the direction $\vb e_1$ is invariant, meaning that an event in $F$ with components only along $\vb e_1$ will not have components along the other directions in $F\u2019$.  " +
                "Given an event $\vb* X =  x_1\ket{\vb{ e}_1,0} + x_4 \ket{ \vb{ 0},1}$, its transformation in $F\u2019$ will be, " +
                "\begin{equation}                \vb \Lambda({\vb v}) ( x_1\ket{\vb{ e}_1,0} + x_4 \ket{ \vb{ 0},1}) = x_1\,(\lambda_{1,1}\ket{\vb{ e}_1,0}+\lambda_{2,1}\ket{\vb{ e}_2,0} +" +
                "\lambda_{3,1}\ket{\vb{ e}_3,0} +\lambda_{4,1}\ket{ \vb{ 0},1}) +x_4(\lambda_{1,4}\ket{\vb{ e}_1,0} +\lambda_{4,4}\ket{ \vb{ 0},1})                \end{equation}" +

                "                  this results in $\lambda_{2,1}=\lambda_{3,1}=0$ to satisfy our assumption. Equation (\ref{generalLambda}) further simplifies as," +

                "   \begin{equation}                 \begin{matrix}" +
                "\lambda_{1,1} \ket{\vb{e}_1,0}\bra{\vb{e}_1,0} & + & \lambda_{1,2}\ket{\vb{e}_1,0}\bra{\vb{e}_2,0}& + &\lambda_{1,3}\ket{\vb{e}_1,0}\bra{\vb{e}_3,0}& + &\lambda_{1,4}\ket{\vb{e}_1,0}\bra{\vb{0},1} \\ " +

                "& + & \lambda_{2,2}\ket{\vb{e}_2,0}\bra{\vb{e}_2,0}& + &\lambda_{2,3}\ket{\vb{e}_2,0}\bra{\vb{e}_3,0}& + & \\ " +

                "& + & \lambda_{3,2}\ket{\vb{e}_3,0}\bra{\vb{e}_2,0}& + &" +
                "\lambda_{3,3}\ket{\vb{e}_3,0}\bra{\vb{e}_3,0}& + & \\" +

                " \lambda_{4,1} \ket{\vb{0},1}\bra{\vb{e}_1,0} & + & \lambda_{4,2}\ket{\vb{0},1}\bra{\vb{e}_2,0}& + & " +
                " \lambda_{4,3}\ket{\vb{0},1}\bra{\vb{e}_3,0}& + &" +
                "  \lambda_{4,4}\ket{\vb{0},1}\bra{\vb{0},1} \\" +
                "  \end{matrix} \\label{generalLambda_1}                \end{equation}")}

            </p>

            <Divider> Second assumption: invariance orthogonal to \(\vb e_1\) </Divider>
            <p>
              {cleanUp("The second assumption we make is that the spatial components along $\ket{\vb{ e}_2,0}$ and $\ket{\vb{ e}_3,0}$ of any event preserve their direction  and length under $\vb \Lambda({\vb v})$."+
              "For an event  $\vb* X =  x_2\ket{ \vb{ e}_2,0}+x_3\ket{ \vb{ e}_3,0}$, the corresponding event in $F\u2019$ will be," +

                "\begin{equation}" +
                "\vb \Lambda({\vb v}) \, (x_2\ket{ \vb{ e}_2,0}+x_3\ket{ \vb{ e}_3,0}) = x_2\,(\lambda_{1,2}\ket{\vb{ e}_1,0}+\lambda_{2,2}\ket{\vb{ e}_2,0} +\lambda_{3,2}\ket{\vb{ e}_3,0}) + "+
                "x_3\,(\lambda_{1,3}\ket{\vb{ e}_1,0}+\lambda_{2,3}\ket{\vb{ e}_2,0} +\lambda_{3,3}\ket{\vb{ e}_3,0})." +
                "\end{equation}" +
                "Our assumptions is satisfied if $\lambda_{1,2}=\lambda_{1,3}=\lambda_{2,3}=\lambda_{3,2}=0$ and $\lambda_{2,2}=\lambda_{3,3}=1$, which results in a further simplification of $\vb \Lambda({\vb v})$: " +
                "\begin{equation}  \begin{matrix}" +
                "\lambda_{1,1} \ket{\vb{e}_1,0}\bra{\vb{e}_1,0} & &&\lambda_{1,4}\ket{\vb{e}_1,0}\bra{\vb{0},1} \\ " +
                " & \ket{\vb{e}_2,0}\bra{\vb{e}_2,0}& \\ " +
                " && \ket{\vb{e}_3,0}\bra{\vb{e}_3,0}& \\ " +
                "\lambda_{4,1} \ket{\vb{0},1}\bra{\vb{e}_1,0} & \lambda_{4,2}\ket{\vb{0},1}\bra{\vb{e}_2,0}&" +
                "\lambda_{4,3}\ket{\vb{0},1}\bra{\vb{e}_3,0}&" +
                "\lambda_{4,4}\ket{\vb{0},1}\bra{\vb{0},1} \\ " +
                " \end{matrix}  " +
                "\end{equation}" +

                "With equation (\ref{timeT}), we arrive at the final functional form of $\vb \Lambda({\vb v})$" +

                "\begin{equation} \vb \Lambda({\vb v})= \lambda_{1,1} \ket{\vb{e}_1,0}\bra{\vb{e}_1,0} + \lambda_{1,4}\ket{\vb{e}_1,0}\bra{\vb{0},1}+ \ket{\vb{e}_2,0}\bra{\vb{e}_2,0}+ \ket{\vb{e}_3,0}\bra{\vb{e}_3,0} -\beta\frac{ v} {c} \ket{\vb{0},1}\bra{\vb{e}_1,0} " +
                " +\beta \ket{\vb{0},1}\bra{\vb{0},1} \\ \\label{simpleLambda_v1} \end{equation}" +
                "Finally, the constants $\lambda_{1,1}, \lambda_{2,2}, \lambda_{3,3},$ and $\beta$ must be positive to  prevent  axis reflection. ")}

            </p>


            <Divider> Third assumption: invariance of light speed </Divider>
            <p>
              {cleanUp("In Special Relativity the spacetime interval between two events $(x_1,y_1,z_1,ct_1)$ and $(x_2,y_2,z_2,ct_2)$ is defined as" +

                "\begin{equation}\Delta s^2 = (x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2 -c^2 (t_2-t_1)^2 \end{equation}" +

                "and can be written in bi-linear form as" +

                "\\[\Delta s^2 = \bra{\vb* X}\ket{ \vb M \vb* X} \\]" +
                "" +
                "where $\vb* X= (x_2-x_1,y_2-y_1,z_2-z_1,c (t_2-t_1))$ and " +
                "" +
                "\begin{equation}" +
                "{\vb M}=\begin{pmatrix}" +
                "                1 & 0 & 0 & 0 \\" +
                "                0 & 1 & 0 & 0 \\" +
                "                0 & 0 & 1 & 0 \\" +
                "                0 & 0 & 0 & -1 " +
                "\end{pmatrix}" +
                "\end{equation}" +
                "" +
                "A spacetime interval measured in $F\u2019$ is linked to the same interval in $F$ by the Lorentz transformation" +
                "" +
                "\begin{equation} \Delta `^2 =   \bra{\vb*  X\u2019}\ket{ \vb M  \vb*  X\u2019}= \bra{{\vb \Lambda}\vb*{X}}\ket{ {\vb M} {\vb \Lambda}\vb*{X}}\\ =\bra{\vb*{X}}\ket{ {\vb \Lambda}^T{\vb M} {\vb \Lambda}\vb*{X}} \end{equation}" +

                "In the system $F$ we consider a photon moving along an unitary vector $\vb n$. The photon at time $t_1$ is in the position $\vb x_1$, and moves to the position $\vb x_1+{\vb n}c(t_2-t_1)$ at the time $t_2$." +
                "The spacetime interval in $F$ of the two events is identically zero," +
                "" +
                "\begin{equation}\Delta s^2 = c^2(t_2-t_1)^2\Vert{\vb n}\Vert^2 -c^2(t_2-t_1)^2 =0 \end{equation}" +
                "" +
                "As we are considering two events along the path of a photon (the so-called world line of a photon), the spacetime interval $\Delta\u2019 s^2$ in $F\u2019$ must also be zero if we assume that the speed of light $c$ is invariant," +

                "\begin{equation} \bra{(c(t_2-t_1){\vb n},c(t_2-t_1))}\ket{{\vb \Lambda}^T{\vb M} {\vb \Lambda}\\cdot(c(t_2-t_1){\vb n},c(t_2-t_1))}=0\end{equation}" +

                "equivalent to," +

                "\begin{equation}\bra{({\vb n},1)}\ket{{\vb \Lambda}^T{\vb M} {\vb \Lambda}\\cdot({\vb n} ,1)}=0 \\label{rt1l}\end{equation}" +
                "for all $\vb n$ such that  $||\vb n||=1$." +

                "To solve equation (\ref{rt1l}) we need ${\vb M} {\vb \Lambda}$, which is ${\vb \Lambda}$ with the time component changed sign," +
                "\begin{equation}" +
                "{\vb M} \vb \Lambda({\vb v})=" +
                "\lambda_{1, 1} \ket{\vb{e}_1,0}\bra{\vb{e}_1,0} + \lambda_{1, 4}\ket{\vb{e}_1,0}\bra{\vb{0},1}+" +
                "\lambda_{2, 2}\ket{\vb{e}_2,0}\bra{\vb{e}_2,0}+" +
                "\lambda_{3, 3}\ket{\vb{e}_3,0}\bra{\vb{e}_3,0}" +
                "+\beta\frac{v} {c} \ket{\vb{0},1}\bra{\vb{e}_1,0}   " +
                "-\beta \ket{\vb{0},1}\bra{\vb{0},1}" +
                "\\label{simpleLambda_v11}" +
                "\end{equation}" +
                "" +
                "and $ {\vb \Lambda}^T$ is readily obtained by exchanging the bra and ket vectors," +
                "" +
                "\begin{equation}" +
                "\vb \Lambda({\vb v})^T=" +
                "\lambda_{1, 1} \ket{\vb{e}_1,0}\bra{\vb{e}_1,0} + \lambda_{1, 4}\ket{\vb{0},1}\bra{\vb{e}_1,0}+" +
                "\lambda_{2, 2}\ket{\vb{e}_2,0}\bra{\vb{e}_2,0}+" +
                "\lambda_{3, 3}\ket{\vb{e}_3,0}\bra{\vb{e}_3,0}" +
                "-\beta\frac{v} {c} \ket{\vb{e}_1,0}\bra{\vb{0},1}   " +
                "+\beta \ket{\vb{0},1}\bra{\vb{0},1}" +
                "\\label{simpleLambda_v12}" +
                "\end{equation}" +

                "The product $\vb \Lambda({\vb v})^T{\vb M} \vb \Lambda({\vb v})$ is" +
                "" +
                "\begin{equation}" +
                "\begin{matrix}" +
                "(\lambda_{1, 1}^2-\beta^2\frac{v ^ 2} {c ^ 2}) \ket{\vb{e}_1,0}\bra{\vb{e}_1,0} + (\lambda_{1, 1}\lambda_{1, 4}+\beta^2\frac{v} {c})\ket{\vb{0},1}\bra{\vb{e}_1,0}" +
                "+ (\lambda_{1, 1}\lambda_{1, 4}+\beta^2\frac{v} {c})\ket{\vb{e}_1,0}\bra{\vb{0},1}+ \\ " +
                "\lambda_{2, 2}^2\ket{\vb{e}_2,0}\bra{\vb{e}_2,0}+" +
                "\lambda_{3, 3}^2\ket{\vb{e}_3,0}\bra{\vb{e}_3,0}" +
                "+(\lambda_{1, 4}^2-\beta^2) \ket{\vb{0},1}\bra{\vb{0},1}" +
                "\end{matrix}" +
                "\\label{simpleLambda_v13}" +
                "\end{equation}" +
                "" +
                "and equation $(\\ref{rt1l})$ reads," +
                "" +
                "\begin{equation}" +
                "(\lambda_{1, 1}^2-\beta^2\frac{v ^ 2} {c ^ 2}) n_1^2 + 2(\lambda_{1, 1}\lambda_{1, 4}+\beta^2\frac{v} {c})n_1" +
                "+" +
                "n_2^2 +" +
                "n_3^2 " +
                "+(\lambda_{1, 4}^2-\beta^2) =0" +
                "\\label{simpleLambda_v13l}" +
                "\end{equation}" +
                "" +
                "Choosing $n_2$ or $n_3=1$ and $n_1=0$, " +
                "" +
                "\begin{equation}" +
                "" +
                "(\lambda_{1, 4}^2-\beta^2) =-1" +
                "" +
                "\end{equation}" +
                "" +
                "Choosing $n_1=\\pm 1$ and  $n_2=n_3=0$, " +
                "" +
                "\begin{gather}" +
                "" +
                "(\lambda_{1, 1}^2-\beta^2\frac{v ^ 2} {c ^ 2})   + 2(\lambda_{1, 1}\lambda_{1, 4}+\beta^2\frac{v} {c}) +(\lambda_{1, 4}^2-\beta^2) =0 \\" +
                "  (\lambda_{1, 1}^2-\beta^2\frac{v ^ 2} {c ^ 2})   - 2(\lambda_{1, 1}\lambda_{1, 4}+\beta^2\frac{v} {c}) " +
                "+(\lambda_{1, 4}^2-\beta^2) =0" +
                "" +
                "\end{gather}" +
                "" +
                "and we arrive at the system of equations" +
                "" +
                "\begin{equation}" +
                "\begin{matrix}" +
                "\lambda_{1, 1}^2-\beta^2\\displaystyle\frac{v ^ 2} {c ^ 2} &= 1 \\ " +
                "\lambda_{1, 1}\lambda_{1, 4}+\beta^2\\displaystyle\\frac{v} {c} & =0 \\ " +
                "\lambda_{1, 4}^2-\beta^2 &=-1 \\ " +
                "" +
                "\end{matrix}" +
                "\end{equation}" +
                "" +
                "which has the following admissible solutions," +
                "" +
                "\begin{align*}" +
                "\beta&=\frac{1}{\\sqrt{1 -\frac{v ^ 2}{c ^ 2} }} \\ " +
                "\lambda_{1, 1}&= \beta \\ " +
                "\lambda_{1, 4}&=-\frac{v}{c}\beta \\ " +
                "\end{align*}" +

                "The Lorentz transformation takes the final form" +

                "\begin{equation}" +
                "\vb \Lambda({\vb v})=" +
                "\beta \ket{\vb{e}_1,0}\bra{\vb{e}_1,0}  -\beta\frac{v}{c}\ket{\vb{e}_1,0}\bra{\vb{0},1}+" +
                "\ket{\vb{e}_2,0}\bra{\vb{e}_2,0}+\ket{\vb{e}_3,0}\bra{\vb{e}_3,0}" +
                "-\beta\frac{ v} {c} \ket{\vb{0},1}\bra{\vb{e}_1,0}   " +
                "+\beta \ket{\vb{0},1}\bra{\vb{0},1} \\ " +
                "\\label{lambda_1}" +
                "\end{equation}" +

                // "where the operator $\vb I\u2019$ is the identity for the components $\ket{\vb{e}_1,0}, \ket{\vb{e}_2,0}$ and $\ket{\vb{e}_3,0}$ ," +

                // "\begin{equation}" +
                // "\ket{\vb{e}_2,0}\bra{\vb{e}_2,0}+" +
                // "\ket{\vb{e}_3,0}\bra{\vb{e}_3,0} = {\vb{I\u2019}}-\ket{\vb{e}_1,0}\bra{\vb{e}_1,0}" +
                // "\end{equation}" +

                "The inverse of $\Lambda(v)$ transforms the coordinates from $ F\u2019$ to $F$ and can be readily obtained by exchanging the velocity sign, as it can be verified directly" +

                
                "\begin{equation}" +
                "\vb \Lambda^{-1}({\vb v})= \Lambda(-{\vb v})=" +
                "\beta \ket{\vb{e}_1,0}\bra{\vb{e}_1,0}  +\beta\frac{v}{c}\ket{\vb{e}_1,0}\bra{\vb{0},1}+" +
                "\ket{\vb{e}_2,0}\bra{\vb{e}_2,0}+\ket{\vb{e}_3,0}\bra{\vb{e}_3,0}" +
                "+\beta\frac{ v} {c} \ket{\vb{0},1}\bra{\vb{e}_1,0}   " +
                "+\beta \ket{\vb{0},1}\bra{\vb{0},1} \\ " +
                "\\label{lambda_inv}" +
                "\end{equation}" +

                "The Lorentz transformation written explicitly in terms of the velocity vector, as $ \ket{\vb{e}_1,0}=\ket{\vb{v},0}/v$, reads," +

                "\begin{equation}" +
                "\vb \Lambda({\vb v})=" +
                "\frac{\beta}{v^2} \ket{\vb v,0}\bra{\vb{v},0}  -\frac{\beta}{c}\ket{\vb{v},0}\bra{\vb{0},1}+" +
               "\ket{\vb{e}_2,0}\bra{\vb{e}_2,0}+\ket{\vb{e}_3,0}\bra{\vb{e}_3,0}" +
                "-\frac{ \beta} {c} \ket{\vb{0},1}\bra{\vb{v},0}   " +
                "+\beta \ket{\vb{0},1}\bra{\vb{0},1} \\ " +
                "\\label{lambda_123}" +
                "\end{equation}" +

                // "The derivation of the relativistic Maxwell equations is easier when the time component $t$ in the Lorentz transformation is in time units, not space $ct$," +

                // "\begin{equation}" +
                // "\vb \Lambda\u2019({\vb v})=" +
                // "\frac{\beta}{v^2} \ket{\vb v,0}\bra{\vb v,0}  -\ds\beta\ket{\vb v,0}\bra{\vb{0},1}+" +
                // "(\vb{I\u2019}-\frac{1}{v^2}\ket{\vb{v},0}\bra{\vb{v},0})" +
                // "-\frac{ \beta} {c^2} \ket{\vb{0},1}\bra{\vb v,0}   " +
                // "+\beta \ket{\vb{0},1}\bra{\vb{0},1} \\ " +
                // "\\label{lambda_11}" +
                // "\end{equation}" +

                "When $\vb v$ has the direction of the x-axis, the transformation simplifies to the original Einstein formula" +

                "\begin{align}" +
                " x\u2019 &= \beta(x-vt ) \nonumber \\ " +
                " y\u2019&=y\nonumber \\ " +
                " z\u2019&=z\nonumber \\ " +
                " t\u2019&= \beta \\left(t-\frac{v}{c^2}x \\right) \\label{Lorentz}" +
                "\end{align}" +

                "Finally, from equation ($\\ref{simpleLambda_v13l}$), the Lorentz transformation satisfies the condition ${\vb \Lambda}^T{\vb M} {\vb \Lambda}=\vb M$, hence $\Delta\u2019 s=\Delta s$ for all events, not only those on a world line of a photon," +

                "\begin{equation}" +
                "\Delta `^2 =   \bra{\vb*  X\u2019}\ket{ \vb M  \vb*  X\u2019}= \bra{{\vb \Lambda}\vb*{X}}\ket{ {\vb M} {\vb \Lambda}\vb*{X}}=\bra{\vb*{X}}\ket{ {\vb \Lambda}^T{\vb M} {\vb \Lambda}\vb*{X}}=\bra{\vb*{X}}\ket{ {\vb M} \vb*{X}}=\Delta s \\label{nrm}" +
                "\end{equation}" 
                
                )}

            </p>
 
          </Paper>
        </Container>

      </Stack>

    </>

  );
}

function cleanUp(rs: string): string {

  const rg = rs.replace(/\$(?!$)(.*?)(?<!\$)\$/g, "\\($1\\)").replace(/\f/g, "\\f").replace(/\v/g, "\\v").replace(/\n/g, "\\n").replace(/[\e]nd{/g, "\\end{").replace(/[\b](\w+)/g, "\\b$1")
    .replace(/ \\ /g, " \\\\ ").replace(/\ds/g, "\\displaystyle").replace(/\ket{/g, "\\ket{").replace(/\grad/g, "\\grad").replace(/\lambda/g, "\\lambda").replace(/\Lambda/g, "\\Lambda").replace(/\Delta/g, "\\Delta")
    .replace(/\ref{/g, "\\ref{").replace(/\Vert/g, "\\Vert")

  return rg;

}
