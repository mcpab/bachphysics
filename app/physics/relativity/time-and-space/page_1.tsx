
import Stack from '@mui/material/Stack';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

// import MathJax from '@/src/MathJax';
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
import MathJaxNode from '@/src/MathJaxNode';

export default function Page() {




  return (

    <>

    <MathJaxNode></MathJaxNode>

      <Stack spacing={24} className=" items-center space-y-6">



        <Container><h1 className='text-5xl'  >The Lorentz Transformation of Time and Space</h1></Container>

        <Container>
          <Paper elevation={3} className='p-10 leading-loose space-y-10 text-black justify-center '>

            <h2  >Introduction  </h2>
            <p>In his seminal article, Einstein elegantly derived the Lorentz transformation for time and space between systems moving at constant relative velocity.
              His original derivation assumed that the relative velocity was aligned with the <em>x</em>-axis, and implicitly considered the measurement of length perpendicular
              to this velocity direction to be consistent in both systems. In this section, we will follow Einstein&#39;s reasoning and extend the derivation to a more general case—a boost in any arbitrary direction.</p>
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
                  <li>Following Einstein&#39;s original method, we will derive the transformation of time based on clock synchronization.</li>
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

            <p> Let us explore the mirror experiment from the perspective of a new reference frame. In this scenario, the mirror and the emitting source are both at rest within a system
              of reference \(F&#39;\), which itself is in motion relative to another system of reference \(F\).
              Observers in \(F\) measure time and distance as \(t\) and \(x_1,x_2,x_3\), while observers in \(F\) measure time and distance as \(t&#39;\) and \(x&#39;_1,x&#39;_2,x&#39;_3\). We assume that at time zero the origin of the systems coincide. </p>

            <Divider className='text-sm'> Experiment Observed from \(F&#39;\) </Divider>

            <MediaAndText imageSrc='/img/movingframes.jpg' imageSize={60} caption="Fig 1:Photon Emission and Reflection in \(F&#39;\)"> <p className=' justify-center content-center '>The source is located at the origin of
              \(F&#39;\) and the mirror is positioned at a fixed distance along an arbitrary direction.


              A photon is emitted at a time \(t&#39;_&#123;0&#125;\),  it reaches the mirror at time $t&#39;_&#123;1&#125;$ where it is reflected, and it arrives back at the source at
              time $t&#39;_&#123;2&#125;$. As we assume that the clocks in $F&#39;$ are synchronized, the following relation holds true:
              \begin&#123;equation&#125;
              \frac&#123;1&#125;&#123;2&#125;(t&#39;_&#123;0&#125;+t&#39;_&#123;2&#125;) = t&#39;_&#123;1&#125; \label&#123;sync&#125;
              \end&#123;equation&#125;</p> </MediaAndText>


            <Divider className='text-sm'> Experiment Observed from \(F\) </Divider>
            <p> Now we examine the three events—emission, reflection, and arrival back at the source—from the viewpoint of reference frame \(F\).
              It is crucial to emphasize that all time, velocity, and distance quantities in this section <i>are assumed to be measured within the system of reference</i> \(F\).
            </p>

            <p>
              The photon is emitted from the source at time $t_&#123;0&#125;$ and at the position $&#123;\vb v&#125;t_&#123;0&#125;$  where $\vb v$ is the velocity of $F&#39;$ measured from $F$.
            </p>
            <MediaAndText imageSrc='/img/movingframes1.jpg' imagePosition='right' imageSize={60} caption="Fig 2:Velocities and positions of the photon seen from \(F\)">
              <p>
                The photon travels to the mirror with speed $\vb c_&#123;up&#125;=\vb c_&#123;1&#125;+\vb v$, and it  reaches it at a time:

                \[ t_&#123;1&#125; = t_&#123;0&#125; +\frac&#123; l&#125;&#123;|&#123;\vb c_&#123;1&#125; &#125; |&#125; = t_&#123;0&#125; +\frac&#123; l&#125;&#123;|&#123;\vb c_&#123;up&#125;-\vb v&#125; |&#125; \]

                where $l$ is the distance of the mirror from the source measured from $F$, and $\vb c_1$ is the photon velocity in $F&#39;$ as observed in $F$. When the photon reaches the mirror its position will be

                \[&#123;\vb v&#125;\, t_&#123;1&#125; + (&#123;\vb  c_&#123;up&#125;- \vb v&#125;)(t_&#123;1&#125;-t_&#123;0&#125;) = &#123;\vb v&#125;t_&#123;0&#125;+ l\frac&#123;\vb c_&#123;up&#125; &#125;&#123;|&#123;\vb
                c_&#123;up&#125;-\vb v&#125; |&#125;\]
              </p> </MediaAndText>

            <p>

              The time $t_&#123; 2 &#125;$ when the photon reaches the source back again is

              \[ t_&#123; 2 &#125;= t_&#123; 1 &#125; +\frac&#123; l &#125;&#123; |&#123; \vb c_&#123; down &#125;-\vb v &#125; | &#125; =t_&#123; 0 &#125; + \frac&#123; l &#125;&#123; |&#123; \vb c_&#123; up &#125;-\vb v &#125; | &#125;+ \frac&#123; l &#125;&#123; |&#123; \vb c_&#123; down &#125;-\vb v &#125; | &#125; \]

              where $\vb c_&#123; down &#125;$ is the photon velocity returning to the source. The position of the photon when it meets the source is,

              \[ &#123; \vb v &#125;t_&#123; 2 &#125;= &#123; \vb v &#125; t_&#123; 0 &#125;+&#123; \vb v &#125;\,\  \frac &#123; l &#125; &#123; |&#123;
              \vb c_&#123; up &#125;-\vb v &#125; | &#125;+ \frac&#123; l &#125;&#123; |&#123; \vb c_&#123; down &#125;-\vb v &#125; | &#125;.\]



              To derive the Lorentz transformation, we will assume the existence of a functional relationship between $t&#39;$ and $t$,
              \[ t&#39;: F \rightarrow R \]
              \[ t&#39;=t&#39;(\vb x,t)\]
              and formally, the events of emission, reflection and meeting the source again will be observed in $F&#39;$ as

              \begin&#123;align*&#125;
              t&#39;_&#123; 0 &#125;&=t&#39;(&#123; \vb v &#125;\, t_&#123; 0 &#125; ,t_&#123; 0 &#125;) \\

              t&#39;_&#123; 1 &#125;&=t&#39;(&#123; \vb v &#125;t_&#123; 0 &#125;+ l\frac&#123; \vb c_&#123; up &#125;  &#125;&#123; \| &#123; \vb  c_&#123; up &#125;-\vb v &#125; \| &#125;  , t_&#123; 0 &#125; +
              \frac&#123; l &#125;&#123; \|&#123; \vb  c_&#123; up &#125;-\vb v &#125; \| &#125; ) \\

              t&#39;_&#123; 2 &#125;&=t&#39;( &#123; \vb v &#125;t_&#123; 0 &#125;+&#123; \vb v &#125;\, l(\|&#123; \vb  c_&#123; up &#125;-\vb v &#125; \|^ &#123; -1 &#125;+ \,\| &#123; \vb  c_&#123; down &#125;-\vb v &#125; \|^ &#123; -1 &#125;) ,
              t_&#123; 0 &#125; + l(\,\| &#123; \vb  c_&#123; up &#125;-\vb v &#125; \|^ &#123; -1 &#125;+ \,\|&#123; \vb  c_&#123; down &#125;-\vb v &#125; \|^&#123; -1 &#125;)   )
              \end&#123;align*&#125;

              expanding the function $f(l): R \rightarrow R$,

              \[ f(l) = t&#39;(&#123; \vb v &#125;t_&#123; 0 &#125;+ l\frac&#123; \vb c_&#123; up &#125;  &#125;&#123; \|&#123; \vb  c_&#123; up &#125;-\vb v &#125; \| &#125;  , t_&#123; 0 &#125; + \frac&#123; l &#125;&#123; \|&#123; \vb  c_&#123; up &#125;-\vb v &#125; \| &#125; ) \]

              in Taylor series of around zero we obtain,

              \[ t&#39;_1 = t&#39;(&#123; \vb v &#125;\,\ t_&#123; 0 &#125; ,t_&#123; 0 &#125;)  + l  \|&#123; \vb  c_&#123; up &#125;-\vb v &#125; \|^&#123; -1 &#125; \bra&#123; \grad  t&#39;  &#125;\ket&#123; (&#123; \vb c_&#123; up &#125; &#125;,1) &#125; +o(l^2).\]

              A similar expression holds true for  $t&#39;_2$,
              \[t&#39;_&#123; 2 &#125;=t&#39;(&#123; \vb v &#125;\,\ t_&#123; 0 &#125;) +  l(\,\\|&#123; \vb  c_&#123; up &#125;-\vb v &#125; \|^&#123; -1 &#125;+ \|&#123; \vb  c_&#123; down &#125;-\vb v &#125; \|^&#123; -1 &#125;)  \bra&#123;  \grad  t&#39;  &#125;\ket&#123;  (&#123; \vb v &#125;,1) &#125; +o(l^2)\]

              Using the synchronization condition of Eq.(\ref&#123;sync&#125;), we arrive at the differential equation in $t&#39;$ (for $l \to 0$),

              \begin&#123;equation&#125;
              \bra&#123; \grad t&#39; &#125;\ket&#123; \vb w &#125;=0
              \end&#123;equation&#125;

              where,

              \[&#123; \vb w &#125; = (\vb v(|&#123; \vb c_&#123; up &#125;-\vb v &#125; |^&#123; -1 &#125;+ |&#123; \vb c_&#123; down &#125;-\vb v &#125; |^&#123; -1 &#125;) - 2 &#123; \vb c_&#123; up &#125; &#125;|&#123; \vb c_&#123; up &#125;-\vb v &#125; |^&#123; -1 &#125;,  |&#123; \vb c_&#123; up &#125;-\vb v &#125; |^&#123; -1 &#125;- |&#123; \vb c_&#123; down &#125;-\vb v &#125; |^&#123; -1 &#125;). \]
              Assuming a linear relationship between the time in $F&#39;$ and the coordinates in $F$ as,

              \[t&#39; = &#123; \vb p &#125;\cdot \vb x+\beta t \]

              where $&#123; \vb p &#125;$ is a vector transforming the spatial coordinates and $\beta$ is the coefficient transforming time, we arrive at the linear equation in $&#123; \vb p &#125;$ and $\beta$

              \begin&#123;equation&#125;
              &#123; \vb p &#125;\vdot [ &#123; \vb v &#125;  (\|&#123; \vb  c_&#123; up &#125;-\vb v &#125; \|^&#123; -1 &#125;+ \|&#123; \vb  c_&#123; down &#125;-\vb v &#125; \|^&#123; -1 &#125;) - 2 &#123; \vb  c_&#123; up &#125; &#125;\|&#123; \vb  c_&#123; up &#125;-\vb v &#125; \|^&#123; -1 &#125;] +
              \beta(\|&#123; \vb  c_&#123; up &#125;-\vb v &#125; \|^&#123; -1 &#125; - \,\|&#123; \vb  c_&#123; down &#125;-\vb v &#125; \|^&#123; -1 &#125;) =0
              \label&#123; eq2 &#125;\end&#123;equation&#125;

            </p>

            <MediaAndText imageSrc='/img/fig1.png' imagePosition='right' imageSize={50} caption="Fig 3:The photon velocities">
              <p>

                Equation (\ref&#123; eq2 &#125;) can be further simplified if we look in detail to the direction of the vectors $&#123; \vb v &#125;$, $&#123; \vb c_&#123; down &#125; &#125;$ and $&#123; \vb c_&#123; up &#125; &#125;$.

                Since the photon in $F&#39;$ follows the same direction going to the mirror and back to the source, $&#123; \vb c_&#123; down &#125; -\vb v &#125;$ and $&#123; \vb c_&#123; up &#125;-\vb v &#125;$ are parallel, but have different magnitude;
                hence $&#123; \vb c_&#123; up &#125; &#125;$, $&#123; \vb c_&#123; down &#125; &#125;$ and $&#123; \vb v &#125;$ are all in the same plane, see Fig (3).
                In the system of reference of three mutually orthogonal unit vectors $&#123; \vb e &#125;_1$, $&#123; \vb e &#125;_2$, and $&#123; \vb e &#125;_3$, with $&#123; \vb e &#125;_1$ and $&#123; \vb e &#125;_2$ in the same plane of $&#123; \vb c_&#123; up &#125; &#125;$ and $&#123; \vb v &#125;$,
                and $&#123; \vb e &#125;_1$ in the same direction of $\bf v$, the vector $\bf p$ has components ($p_3$ can be set to zero as it is orthogonal to the plane of $&#123; \vb c_&#123; down &#125; &#125;$ and $&#123; \vb v &#125;$)

                \[ &#123; \vb p &#125; = p_1&#123; \vb e_1 &#125; + p_2&#123; \vb e_2 &#125; + 0 \,&#123; \vb e_3 &#125;    \]

                and equation (\ref&#123; eq2 &#125;) simplifies to

              </p> </MediaAndText>
            <p>

              \begin&#123;equation&#125; &#123;  p_1 &#125; &#123;  v &#125; (|&#123; \vb c_&#123; up &#125;-\vb v &#125; |^&#123; -1 &#125;+ |&#123; \vb c_&#123; down &#125;-\vb v &#125; |^&#123; -1 &#125;) - 2 &#123;  c &#125;(p_1\cos\alpha+p_2\sin\alpha)|&#123; \vb c_&#123; up &#125;-\vb v &#125; |^&#123; -1 &#125; +\beta(|&#123; \vb c_&#123; up &#125;-\vb v &#125; |^&#123; -1 &#125; -
              |&#123; \vb c_&#123; down &#125;-\vb v &#125; |^&#123; -1 &#125;) =0 \label&#123; eq3 &#125;\end&#123;equation&#125;

              From

              \[\cos\alpha = \frac&#123;  c^2 +v^2 - |&#123; \vb c_&#123; up &#125;-\vb v &#125; |^2  &#125;&#123;  2 v c &#125; \] equation (\ref&#123; eq3 &#125;) reads

              \begin&#123;equation&#125;
              p_1 \frac&#123; c^2 &#125;&#123; v &#125; +\beta +p_2 \,\,\frac&#123; 2c\sin\alpha |&#123; \vb c_&#123; up &#125;-v &#125; | &#125;&#123; |&#123; \vb c_&#123; up &#125;-v &#125; |-|&#123; \vb c_&#123; down &#125;-v &#125; | &#125; =0\quad\forall \alpha,v
              \end&#123;equation&#125;

              which has solutions

              \[ p_1=-\beta\frac&#123; v &#125;&#123; c^2 &#125;\]
              \[ p_2=0\]

              The transformation of time between $F&#39;$ and $F$ becomes then

              \begin&#123;equation&#125;
              ct&#39; = \beta \left(-\frac&#123;  v &#125; &#123; c &#125;&#123; \vb e &#125;_1\cdot\vb x+ct \right) \label&#123; timeT &#125;
              \end&#123;equation&#125;

              where $\beta$ is a constant depending on the velocity.

            </p>

          </Paper>
        </Container>

        <Container>
          <Paper elevation={3} className='p-10 leading-loose space-y-10 text-black justify-center '>
            <h1>Transformation of Space</h1>
            <h2>General Form of the Lorentz Transformation</h2>
            <p>

              The Lorentz transformation describes how the coordinates and the time of the same event observed in $F$ and $F&#39;$ are related to each other, and it is assumed to be linear
              \begin&#123;equation&#125;
              &#123; \vb* X&#39; &#125; = &#123; \bf\Lambda &#125;(&#123; \vb* v &#125;) &#123; \vb* X &#125; \label&#123; tran11 &#125;
              \end&#123;equation&#125;

              where $\vb \Lambda(&#123; \vb v &#125;)$ is a matrix depending only on the velocity vector $\vb v$, and $&#123; \vb* X &#125;$ is the so-called four-vector

              \[ \vb* X= (x_1,x_2,x_3,c t). \]

              A four-vector can be represented as sum of ket vectors formed from a unitary triplet of orthogonal vectors $\vb e_1$, $\vb e_2$ and $\vb e_3$, with $\vb e_1$ chosen parallel to $\vb v$

              \[   \vb* X = x_1 \ket&#123; \vb&#123; e &#125;_1,0 &#125; + x_2   \ket&#123; \vb&#123; e &#125;_2,0 &#125; + x_2 \ket&#123; \vb&#123; e &#125;_3,0 &#125; + ct \ket&#123; \vb&#123; 0 &#125;,1 &#125;   \]

              and the Lorentz transformation $\vb \Lambda(&#123; \vb v &#125;)$ in its most general form becomes

              \begin&#123;equation&#125;
              \begin&#123;matrix&#125;
              \lambda_&#123; 1,1 &#125; \ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125; &+& \lambda_&#123; 1,2 &#125;\ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123;
              \vb&#123; e &#125;_2,0 &#125; &+&\lambda_&#123; 1,3 &#125;\ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; e &#125;_3,0 &#125;  &+&\lambda_&#123; 1,4 &#125;\ket&#123; \vb&#123;
              e &#125;_1,0 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125; \\

              \lambda_&#123; 2,1 &#125; \ket&#123; \vb&#123; e &#125;_2,0 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125; &+& \lambda_&#123; 2,2 &#125;\ket&#123; \vb&#123; e &#125;_2,0 &#125;\bra&#123;
              \vb&#123; e &#125;_2,0 &#125; &+&\lambda_&#123; 2,3 &#125;\ket&#123; \vb&#123; e &#125;_2,0 &#125;\bra&#123; \vb&#123; e &#125;_3,0 &#125;  &+&\lambda_&#123; 2,4 &#125;\ket&#123; \vb&#123;
              e &#125;_2,0 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125; \\

              \lambda_&#123; 3,1 &#125; \ket&#123; \vb&#123; e &#125;_3,0 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125; &+& \lambda_&#123; 3,2 &#125;\ket&#123; \vb&#123; e &#125;_3,0 &#125;\bra&#123;
              \vb&#123; e &#125;_2,0 &#125; &+& \lambda_&#123; 3,3 &#125;\ket&#123; \vb&#123; e &#125;_3,0 &#125;\bra&#123; \vb&#123; e &#125;_3,0 &#125; &+& \lambda_&#123; 3,4 &#125;\ket&#123; \vb&#123;
              e &#125;_3,0 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125; \\
              \lambda_&#123; 4,1 &#125; \ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125;   &+& \lambda_&#123; 4,2 &#125;\ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123;
              \vb&#123; e &#125;_2,0 &#125;   &+& \lambda_&#123; 4,3 &#125;\ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; e &#125;_3,0 &#125;   &+&\lambda_&#123; 4,4 &#125;\ket&#123; \vb&#123; 0 &#125;,1 &#125;\
              bra&#123; \vb&#123; 0 &#125;,1 &#125; \\
              \end&#123;matrix&#125; \label&#123; generalLambda &#125;
              \end&#123;equation&#125;

              where $\lambda_&#123; i,j &#125;$ are sixteen free parameters. The transformation of time $\ref&#123; timeT &#125;$ can be utilized to identify some of the  $\lambda_&#123; i,j &#125;$ but not all of them:
              assumptions need to be made on how events are observed in $F$ and $F&#39;$ to restrict the possible choices for $\lambda_&#123; i,j &#125;$.

            </p>

            <Divider> The transformation of time </Divider>

            <p>
              The transformation $\vb \Lambda(&#123; \vb v &#125;)$ applied to a  four-vector with only a time component: $\vb* X = x_4\ket&#123; \vb&#123; 0 &#125;,1 &#125;$ gives,

              \begin&#123;equation&#125;
              \vb \Lambda\,\ x_4 \ket&#123;  \vb&#123;  0 &#125;,1 &#125; =x_4(\lambda_&#123; 1,4 &#125;\ket&#123; \vb&#123;  e &#125;_1,0 &#125;+\lambda_&#123; 2,4 &#125;\ket&#123; \vb&#123;
              e &#125;_2,0 &#125; +\lambda_&#123; 3,4 &#125;\ket&#123; \vb&#123;  e &#125;_3,0 &#125; +\lambda_&#123; 4,4 &#125;\ket&#123;  \vb&#123;  0 &#125;,1 &#125;)
              \end&#123;equation&#125;

              but from the transformation of time $\ref&#123; timeT &#125;$ there are only components along $\vb e_1$ and time, hence $\lambda_&#123; 2,4 &#125;=\lambda_&#123; 3,4 &#125;=0$.
            </p>

            <Divider> First assumption: preserve direction along \(\vb e_1\) </Divider>

            <p>

              The first assumption we make is that the direction $\vb e_1$ is invariant, meaning that an event in $F$ with components only along $\vb e_1$ will not have components along the other directions in $F&#39;$.


              Given an event $\vb* X =  x_1\ket&#123; \vb&#123;  e &#125;_1,0 &#125; + x_4 \ket&#123;  \vb&#123;  0 &#125;,1 &#125;$, its transformation in $F&#39;$ will be,

              \begin&#123;equation&#125;
              \vb \Lambda(&#123; \vb v &#125;) ( x_1\ket&#123; \vb&#123;  e &#125;_1,0 &#125; + x_4 \ket&#123;  \vb&#123;  0 &#125;,1 &#125;) = x_1\,
              (\lambda_&#123; 1,1 &#125;\ket&#123; \vb&#123;  e &#125;_1,0 &#125;+\lambda_&#123; 2,1 &#125;\ket&#123; \vb&#123;  e &#125;_2,0 &#125; +
              \lambda_&#123; 3,1 &#125;\ket&#123; \vb&#123;  e &#125;_3,0 &#125; +\lambda_&#123; 4,1 &#125;\ket&#123;  \vb&#123;  0 &#125;,1 &#125;) +x_4
              (\lambda_&#123; 1,4 &#125;\ket&#123; \vb&#123;  e &#125;_1,0 &#125; +\lambda_&#123; 4,4 &#125;\ket&#123;  \vb&#123;  0 &#125;,1 &#125;)
              \end&#123;equation&#125;

              this results in $\lambda_&#123; 2,1 &#125;=\lambda_&#123; 3,1 &#125;=0$ to satisfy our assumption. Equation (\ref&#123; generalLambda &#125;) further simplifies as,

              \begin&#123;equation&#125;
              \begin&#123;matrix&#125;
              \lambda_&#123; 1,1 &#125; \ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125; & + & \lambda_&#123; 1,2 &#125;\ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123;
              \vb&#123; e &#125;_2,0 &#125;& + &\lambda_&#123; 1,3 &#125;\ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; e &#125;_3,0 &#125;& + &\lambda_&#123; 1,4 &#125;\ket&#123;
              \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125; \\

              & + & \lambda_&#123; 2,2 &#125;\ket&#123; \vb&#123; e &#125;_2,0 &#125;\bra&#123; \vb&#123; e &#125;_2,0 &#125;& + &\lambda_&#123; 2,3 &#125;\ket&#123; \vb&#123; e &#125;_2,0 &#125;
              \bra&#123; \vb&#123; e &#125;_3,0 &#125;& + & \\

              & + & \lambda_&#123; 3,2 &#125;\ket&#123; \vb&#123; e &#125;_3,0 &#125;\bra&#123; \vb&#123; e &#125;_2,0 &#125;& + &
              \lambda_&#123; 3,3 &#125;\ket&#123; \vb&#123; e &#125;_3,0 &#125;\bra&#123; \vb&#123; e &#125;_3,0 &#125;& + & \\

              \lambda_&#123; 4,1 &#125; \ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125; & + & \lambda_&#123; 4,2 &#125;\ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; e &#125;_2,0 &#125;& + &
              \lambda_&#123; 4,3 &#125;\ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; e &#125;_3,0 &#125;& + &
              \lambda_&#123; 4,4 &#125;\ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125; \\
              \end&#123;matrix&#125; \label&#123; generalLambda_1 &#125;
              \end&#123;equation&#125;

            </p>

            <Divider> Second assumption: invariance orthogonal to \(\vb e_1\) </Divider>
            <p>
              The second assumption we make is that the spatial components along $\ket&#123; \vb&#123;  e &#125;_2,0 &#125;$ and $\ket&#123; \vb&#123;  e &#125;_3,0 &#125;$ of
              any event preserve their direction  and length under $\vb \Lambda(&#123; \vb v &#125;)$.
              For an event  $\vb* X =  x_2\ket&#123;  \vb&#123;  e &#125;_2,0 &#125;+x_3\ket&#123;  \vb&#123;  e &#125;_3,0 &#125;$, the corresponding event in $F&#39;$ will be,

              \begin&#123;equation&#125;
              \vb \Lambda(&#123; \vb v &#125;) \, (x_2\ket&#123;  \vb&#123;  e &#125;_2,0 &#125;+x_3\ket&#123;  \vb&#123;  e &#125;_3,0 &#125;) = x_2\,(\lambda_&#123; 1,2 &#125;\ket&#123; \vb&#123;
              e &#125;_1,0 &#125;+\lambda_&#123; 2,2 &#125;\ket&#123; \vb&#123;  e &#125;_2,0 &#125; +\lambda_&#123; 3,2 &#125;\ket&#123; \vb&#123;  e &#125;_3,0 &#125;) +
              x_3\,(\lambda_&#123; 1,3 &#125;\ket&#123; \vb&#123;  e &#125;_1,0 &#125;+\lambda_&#123; 2,3 &#125;\ket&#123; \vb&#123;  e &#125;_2,0 &#125; +\lambda_&#123; 3,3 &#125;\ket&#123; \vb&#123;  e &#125;_3,0 &#125;).
              \end&#123;equation&#125;
              Our assumptions is satisfied if $\lambda_&#123; 1,2 &#125;=\lambda_&#123; 1,3 &#125;=\lambda_&#123; 2,3 &#125;=\lambda_&#123; 3,2 &#125;=0$ and $\lambda_&#123; 2,2 &#125;=\lambda_&#123; 3,3 &#125;=1$, which results in a further simplification of $\vb \Lambda(&#123; \vb v &#125;)$:
              \begin&#123;equation&#125;  \begin&#123;matrix&#125;
              \lambda_&#123; 1,1 &#125; \ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125; & &&\lambda_&#123; 1,4 &#125;\ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125; \\
              & \ket&#123; \vb&#123; e &#125;_2,0 &#125;\bra&#123; \vb&#123; e &#125;_2,0 &#125;& \\
              && \ket&#123; \vb&#123; e &#125;_3,0 &#125;\bra&#123; \vb&#123; e &#125;_3,0 &#125;& \\
              \lambda_&#123; 4,1 &#125; \ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125; & \lambda_&#123; 4,2 &#125;\ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; e &#125;_2,0 &#125;&
              \lambda_&#123; 4,3 &#125;\ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; e &#125;_3,0 &#125;&
              \lambda_&#123; 4,4 &#125;\ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125; \\
              \end&#123;matrix&#125;
              \end&#123;equation&#125;

              With equation (\ref&#123; timeT &#125;), we arrive at the final functional form of $\vb \Lambda(&#123; \vb v &#125;)$

              \begin&#123;equation&#125; \vb \Lambda(&#123; \vb v &#125;)= \lambda_&#123; 1,1 &#125; \ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125; +
              \lambda_&#123; 1,4 &#125;\ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125;+ \ket&#123; \vb&#123; e &#125;_2,0 &#125;\bra&#123; \vb&#123; e &#125;_2,0 &#125;+
              \ket&#123; \vb&#123; e &#125;_3,0 &#125;\bra&#123; \vb&#123; e &#125;_3,0 &#125; -\beta\frac&#123;  v &#125; &#123; c &#125; \ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125;
              +\beta \ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125; \\ \label&#123; simpleLambda_v1 &#125; \end&#123;equation&#125;
              Finally, the constants $\lambda_&#123; 1,1 &#125;, \lambda_&#123; 2,2 &#125;, \lambda_&#123; 3,3 &#125;,$ and $\beta$ must be positive to  prevent  axis reflection.

            </p>


            <Divider> Third assumption: invariance of light speed </Divider>
            <p>
              In Special Relativity the spacetime interval between two events $(x_1,y_1,z_1,ct_1)$ and $(x_2,y_2,z_2,ct_2)$ is defined as

              \begin&#123;equation&#125;\Delta s^2 = (x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2 -c^2 (t_2-t_1)^2 \end&#123;equation&#125;

              and can be written in bi-linear form as

              \[\Delta s^2 = \bra&#123; \vb* X &#125;\ket&#123;  \vb M \vb* X &#125; \]

              where $\vb* X= (x_2-x_1,y_2-y_1,z_2-z_1,c (t_2-t_1))$ and

              \begin&#123;equation&#125;
              &#123; \vb M &#125;=\begin&#123;pmatrix&#125;
              1 & 0 & 0 & 0 \\
              0 & 1 & 0 & 0 \\
              0 & 0 & 1 & 0 \\
              0 & 0 & 0 & -1
              \end&#123;pmatrix&#125;
              \end&#123;equation&#125;

              A spacetime interval measured in $F&#39;$ is linked to the same interval in $F$ by the Lorentz transformation

              \begin&#123;equation&#125;
              \Delta `^2 =   \bra&#123; \vb*  X&#39; &#125;\ket&#123;  \vb M  \vb*  X&#39; &#125;= \bra&#123; &#123; \vb \Lambda &#125;\vb*&#123; X &#125; &#125;\ket&#123;
              &#123; \vb M &#125; &#123; \vb \Lambda &#125;\vb*&#123; X &#125; &#125;\\ =\bra&#123; \vb*&#123; X &#125; &#125;\ket&#123;  &#123; \vb \Lambda &#125;^T&#123; \vb M &#125; &#123; \vb \Lambda &#125;\vb*&#123; X &#125; &#125;
              \end&#123;equation&#125;

              In the system $F$ we consider a photon moving along an unitary vector $\vb n$. The photon at time $t_1$ is in the position $\vb x_1$, and moves to the position $\vb x_1+&#123; \vb n &#125;c(t_2-t_1)$ at the time $t_2$.
              The spacetime interval in $F$ of the two events is identically zero,

              \begin&#123;equation&#125;
              \Delta s^2 = c^2(t_2-t_1)^2\Vert&#123; \vb n &#125;\Vert^2 -c^2(t_2-t_1)^2 =0
              \end&#123;equation&#125;

              As we are considering two events along the path of a photon (the so-called world line of a photon), the spacetime interval $\Delta&#39; s^2$ in $F&#39;$ must also be zero if we assume that the speed of light $c$ is invariant,

              \begin&#123;equation&#125;
              \bra&#123; (c(t_2-t_1)&#123; \vb n &#125;,c(t_2-t_1)) &#125;\ket&#123; &#123; \vb \Lambda &#125;^T&#123; \vb M &#125; &#123; \vb \Lambda &#125;\cdot(c(t_2-t_1)&#123; \vb n &#125;,c(t_2-t_1)) &#125;=0
              \end&#123;equation&#125;

              equivalent to,

              \begin&#123;equation&#125;
              \bra&#123; (&#123; \vb n &#125;,1) &#125;\ket&#123; &#123; \vb \Lambda &#125;^T&#123; \vb M &#125; &#123; \vb \Lambda &#125;\cdot(&#123; \vb n &#125; ,1) &#125;=0 \label&#123; rt1l &#125;
              \end&#123;equation&#125;

              for all $\vb n$ such that  $||\vb n||=1$.

              To solve equation (\ref&#123; rt1l &#125;) we need $&#123; \vb M &#125; &#123; \vb \Lambda &#125;$, which is $&#123; \vb \Lambda &#125;$ with the time component changed sign,

              \begin&#123;equation&#125;
              &#123; \vb M &#125; \vb \Lambda(&#123; \vb v &#125;)=
              \lambda_&#123; 1, 1 &#125; \ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125; + \lambda_&#123; 1, 4 &#125;\ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125;+
              \lambda_&#123; 2, 2 &#125;\ket&#123; \vb&#123; e &#125;_2,0 &#125;\bra&#123; \vb&#123; e &#125;_2,0 &#125;+
              \lambda_&#123; 3, 3 &#125;\ket&#123; \vb&#123; e &#125;_3,0 &#125;\bra&#123; \vb&#123; e &#125;_3,0 &#125;
              +\beta\frac&#123; v &#125; &#123; c &#125; \ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125;
              -\beta \ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125;
              \label&#123; simpleLambda_v11 &#125;
              \end&#123;equation&#125;

              and $ &#123; \vb \Lambda &#125;^T$ is readily obtained by exchanging the bra and ket vectors,

              \begin&#123;equation&#125;
              \vb \Lambda(&#123; \vb v &#125;)^T=
              \lambda_&#123; 1, 1 &#125; \ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125; + \lambda_&#123; 1, 4 &#125;\ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125;+
              \lambda_&#123; 2, 2 &#125;\ket&#123; \vb&#123; e &#125;_2,0 &#125;\bra&#123; \vb&#123; e &#125;_2,0 &#125;+
              \lambda_&#123; 3, 3 &#125;\ket&#123; \vb&#123; e &#125;_3,0 &#125;\bra&#123; \vb&#123; e &#125;_3,0 &#125;
              -\beta\frac&#123; v &#125; &#123; c &#125; \ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125;
              +\beta \ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125;
              \label&#123; simpleLambda_v12 &#125;
              \end&#123;equation&#125;

              The product $\vb \Lambda(&#123; \vb v &#125;)^T&#123; \vb M &#125; \vb \Lambda(&#123; \vb v &#125;)$ is

              \begin&#123;equation&#125;
              \begin&#123;matrix&#125;
              (\lambda_&#123; 1, 1 &#125;^2-\beta^2\frac&#123; v ^ 2 &#125; &#123; c ^ 2 &#125;) \ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125; +
              (\lambda_&#123; 1, 1 &#125;\lambda_&#123; 1, 4 &#125;+\beta^2\frac&#123; v &#125; &#123; c &#125;)\ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125;
              + (\lambda_&#123; 1, 1 &#125;\lambda_&#123; 1, 4 &#125;+\beta^2\frac&#123; v &#125; &#123; c &#125;)\ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125;+ \\
              \lambda_&#123; 2, 2 &#125;^2\ket&#123; \vb&#123; e &#125;_2,0 &#125;\bra&#123; \vb&#123; e &#125;_2,0 &#125;+
              \lambda_&#123; 3, 3 &#125;^2\ket&#123; \vb&#123; e &#125;_3,0 &#125;\bra&#123; \vb&#123; e &#125;_3,0 &#125;
              +(\lambda_&#123; 1, 4 &#125;^2-\beta^2) \ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125;
              \end&#123;matrix&#125;
              \label&#123; simpleLambda_v13 &#125;
              \end&#123;equation&#125;

              and equation $(\ref&#123; rt1l &#125;)$ reads,

              \begin&#123;equation&#125;
              (\lambda_&#123; 1, 1 &#125;^2-\beta^2\frac&#123; v ^ 2 &#125; &#123; c ^ 2 &#125;) n_1^2 + 2(\lambda_&#123; 1, 1 &#125;\lambda_&#123; 1, 4 &#125;+\beta^2\frac&#123; v &#125; &#123; c &#125;)n_1
              +
              n_2^2 +
              n_3^2
              +(\lambda_&#123; 1, 4 &#125;^2-\beta^2) =0
              \label&#123; simpleLambda_v13l &#125;
              \end&#123;equation&#125;

              Choosing $n_2$ or $n_3=1$ and $n_1=0$,

              \begin&#123;equation&#125;

              (\lambda_&#123; 1, 4 &#125;^2-\beta^2) =-1

              \end&#123;equation&#125;

              Choosing $n_1=\pm 1$ and  $n_2=n_3=0$,

              \begin&#123;gather&#125;

              (\lambda_&#123; 1, 1 &#125;^2-\beta^2\frac&#123; v ^ 2 &#125; &#123; c ^ 2 &#125;)   + 2(\lambda_&#123; 1, 1 &#125;\lambda_&#123; 1, 4 &#125;+\beta^2\frac&#123; v &#125; &#123; c &#125;) +(\lambda_&#123; 1, 4 &#125;^2-\beta^2) =0 \\
              (\lambda_&#123; 1, 1 &#125;^2-\beta^2\frac&#123; v ^ 2 &#125; &#123; c ^ 2 &#125;)   - 2(\lambda_&#123; 1, 1 &#125;\lambda_&#123; 1, 4 &#125;+\beta^2\frac&#123; v &#125; &#123; c &#125;)
              +(\lambda_&#123; 1, 4 &#125;^2-\beta^2) =0

              \end&#123;gather&#125;

              and we arrive at the system of equations

              \begin&#123;equation&#125;
              \begin&#123;matrix&#125;
              \lambda_&#123; 1, 1 &#125;^2-\beta^2\displaystyle\frac&#123; v ^ 2 &#125; &#123; c ^ 2 &#125; &= 1 \\
              \lambda_&#123; 1, 1 &#125;\lambda_&#123; 1, 4 &#125;+\beta^2\displaystyle\frac&#123; v &#125; &#123; c &#125; & =0 \\
              \lambda_&#123; 1, 4 &#125;^2-\beta^2 &=-1 \\

              \end&#123;matrix&#125;
              \end&#123;equation&#125;

              which has the following admissible solutions,

              \begin&#123;align*&#125;
              \beta&=\frac&#123; 1 &#125;&#123;\sqrt&#123; 1 -\frac&#123; v ^ 2 &#125;&#123; c ^ 2 &#125;  &#125;&#125; \\
              \lambda_&#123; 1, 1 &#125;&= \beta \\
              \lambda_&#123; 1, 4 &#125;&=-\frac&#123; v &#125;&#123; c &#125;\beta \\
              \end&#123;align*&#125;

              The Lorentz transformation takes the final form

              \begin&#123;equation&#125;
              \vb \Lambda(&#123; \vb v &#125;)=
              \beta \ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125;  -\beta\frac&#123; v &#125;&#123; c &#125;\ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125;+
              \ket&#123; \vb&#123; e &#125;_2,0 &#125;\bra&#123; \vb&#123; e &#125;_2,0 &#125;+\ket&#123; \vb&#123; e &#125;_3,0 &#125;\bra&#123; \vb&#123; e &#125;_3,0 &#125;
              -\beta\frac&#123;  v &#125; &#123; c &#125; \ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125;
              +\beta \ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125; \\
              \label&#123; lambda_1 &#125;
              \end&#123;equation&#125;


              The inverse of $\Lambda(v)$ transforms the coordinates from $ F&#39;$ to $F$ and can be readily obtained by exchanging the velocity sign, as it can be verified directly


              \begin&#123;equation&#125;
              \vb \Lambda^&#123; -1 &#125;(&#123; \vb v &#125;)= \Lambda(-&#123; \vb v &#125;)=
              \beta \ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125;  +\beta\frac&#123; v &#125;&#123; c &#125;\ket&#123; \vb&#123; e &#125;_1,0 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125;+
              \ket&#123; \vb&#123; e &#125;_2,0 &#125;\bra&#123; \vb&#123; e &#125;_2,0 &#125;+\ket&#123; \vb&#123; e &#125;_3,0 &#125;\bra&#123; \vb&#123; e &#125;_3,0 &#125;
              +\beta\frac&#123;  v &#125; &#123; c &#125; \ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; e &#125;_1,0 &#125;
              +\beta \ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125; \\
              \label&#123; lambda_inv &#125;
              \end&#123;equation&#125;

              The Lorentz transformation written explicitly in terms of the velocity vector, as $ \ket&#123; \vb&#123; e &#125;_1,0 &#125;=\ket&#123; \vb&#123; v &#125;,0 &#125;/v$, reads,

              \begin&#123;equation&#125;
              \vb \Lambda(&#123; \vb v &#125;)=
              \frac&#123; \beta &#125;&#123; v^2 &#125; \ket&#123; \vb v,0 &#125;\bra&#123; \vb&#123; v &#125;,0 &#125;  -\frac&#123; \beta &#125;&#123; c &#125;\ket&#123; \vb&#123; v &#125;,0 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125;+
              \ket&#123; \vb&#123; e &#125;_2,0 &#125;\bra&#123; \vb&#123; e &#125;_2,0 &#125;+\ket&#123; \vb&#123; e &#125;_3,0 &#125;\bra&#123; \vb&#123; e &#125;_3,0 &#125;
              -\frac&#123;  \beta &#125; &#123; c &#125; \ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; v &#125;,0 &#125;
              +\beta \ket&#123; \vb&#123; 0 &#125;,1 &#125;\bra&#123; \vb&#123; 0 &#125;,1 &#125; \\
              \label&#123; lambda_123 &#125;
              \end&#123;equation&#125;


              When $\vb v$ has the direction of the x-axis, the transformation simplifies to the original Einstein formula

              \begin&#123;align&#125;
              x&#39; &= \beta(x-vt ) \nonumber \\
              y&#39; &=y\nonumber \\
              z&#39; &=z\nonumber \\
              t&#39; &= \beta \left(t-\frac&#123; v &#125;&#123; c^2 &#125;x \right) \label&#123; Lorentz &#125;
              \end&#123;align&#125;

              Finally, from equation ($\ref&#123; simpleLambda_v13l &#125;$), the Lorentz transformation satisfies the condition $&#123; \vb \Lambda &#125;^T&#123;
              \vb M &#125; &#123; \vb \Lambda &#125;=\vb M$, hence $\Delta&#39; s=\Delta s$ for all events, not only those on a world line of a photon,

              \begin&#123;equation&#125;
              \Delta `^2 =   \bra&#123; \vb*  X&#39; &#125;\ket&#123;  \vb M  \vb*  X&#39; &#125;= \bra&#123; &#123; \vb \Lambda &#125;\vb*&#123; X &#125; &#125;\ket&#123;
              &#123; \vb M &#125; &#123; \vb \Lambda &#125;\vb*&#123; X &#125; &#125;=\bra&#123; \vb*&#123; X &#125; &#125;\ket&#123;  &#123; \vb \Lambda &#125;^T&#123; \vb M &#125; &#123;
              \vb \Lambda &#125;\vb*&#123; X &#125; &#125;=\bra&#123; \vb*&#123; X &#125; &#125;\ket&#123;  &#123; \vb M &#125; \vb*&#123; X &#125; &#125;=\Delta s \label&#123; nrm &#125;
              \end&#123;equation&#125;


            </p>

          </Paper>
        </Container>

      </Stack>

    </>

  );
}

