import Stack from '@mui/material/Stack';
import 'katex/dist/katex.min.css';
import Container from '@mui/material/Container';
import Link from 'next/link';

import { eq, mt, ref, mtx, get } from '@/src/katex/supportFunction';
import MathSection from '@/src/katex/MathSection';

const pageName = 'composition-of-velocities';


export default async function Page() {

    return (


        <Stack spacing={24} className=" items-center space-y-6">

            <Container><h1 className='text-5xl'  >Composition of Velocities</h1></Container>

            <MathSection title='Derivation of Composition of Velocities'>
                <section>

                    In classical mechanics, a velocity  {mt("{\\vb u'}")} in the moving frame will be measured in the stationary frame as {mt("{\\vb u}={\\vb v}+{\\vb u'}")}, which is the well-known law of the parallelograms.
                    In relativity, the parallelogram formula holds only for velocities well below the speed of light, and the composition of velocities
                    needs to account for the fact that no speed can be measured, which is faster than the speed of light.

                    We will use the same reference systems as defined in the section of <Link href='/physics/relativity/time-and-space' className='text-inherit no-underline hover:text-blue-300' >The Transformation of Time and Space</Link>.
                    We consider the general motion of a body in {mt("F'")} described by the four-vector

                    {eq("\\ket{\\vb{x}',0} +c t' \\ket{\\vb{0},1}")}

                    where we assume that {mt("\\vb{x}'=\\vb{x}'(t')")}. The motion of the body observed in {mt("F")} is given by the Lorentz transformation

                    {eq("{\\bf \\Lambda ({\\vb v}) }\\left(\\ket{\\vb{x},0} +c t \\ket{\\vb{0},1}\\right) = \\ket{\\vb{x}',0} +c t' \\ket{\\vb{0},1}")}

                    where {mt("\\bf \\Lambda ({\\vb v})")} is the {ref("Lorentz transformation in velocity", "time-and-space")}.

                    {get('Lorentz transformation in velocity', 'time-and-space')}

                    and {mt("\\vb{x}=\\vb{x}(t)")}. The velocity of the body in {mt("F")} is given by the derivative of the position vector with respect to time


                    {eq("{\\bf \\Lambda ({\\vb v})} \\frac{d}{dt}\\left(\\ket{\\vb{x},0} +c t \\ket{\\vb{0},1}\\right) = \\frac{d}{dt}\\left( \\ket{\\vb{x}',0} +c t' \\ket{\\vb{0},1}\\right)")}

                    From the transformation of time and space,

                    {get('transformation of time', 'time-and-space')}

                    we can compute the relation between the velocities {mt("\\vb{u}")} and {mt("\\vb{u}'")} in {mt("F")} and {mt("F'")} respectively,

                    {eq("{\\bf \\Lambda({\\vb v}) }(\\ket{\\vb{u},0} +c  \\ket{\\vb{0},1}) =  \\beta\\left(1-\\frac{ \\braket{{\\vb v}|\\vb u}}{c^2}  \\right) (\\ket{\\vb{u}',0} +c  \\ket{\\vb{0},1})")}

                    which using the Lorentz transformation in velocity, reads

                    {eq("\\beta\\left( \\frac{\\braket{\\vb v|\\vb u}}{v^2}-1\\right)\\ket{\\vb v,0} + \\ket{\\vb{e}_2,0}\\braket{\\vb{e}_2|\\vb u}+\\ket{\\vb{e}_3,0}\\braket{\\vb{e}_3|\\vb u} + " +
                        "\\ket{\\vb{0},1}\\beta c \\left( 1- \\frac{\\braket{\\vb v|\\vb u}}{c^2}  \\right)= \\beta\\left(1-\\frac{ \\braket{{\\vb v}|\\vb u}}{c^2}  \\right) (\\ket{\\vb{u}',0} +c  \\ket{\\vb{0},1})."
                    )}

                    and simplifies to,

                    {eq("\\beta\\left( \\frac{\\braket{\\vb v|\\vb u}}{v^2}-1\\right)\\ket{\\vb v,0} + \\ket{\\vb{e}_2,0}\\braket{\\vb{e}_2|\\vb u}+\\ket{\\vb{e}_3,0}\\braket{\\vb{e}_3|\\vb u}= \\beta\\left(1-\\frac{ \\braket{{\\vb v}|\\vb u}}{c^2}  \\right) \\ket{\\vb{u}',0}."
                    )}

                    The equation above can be written in a more compact form as,

                    {eq("\\beta \\frac{\\braket{\\vb v|\\vb u}}{v^2} \\ket{\\vb v,0}-\\beta\\ket{\\vb v,0}- \\frac{\\braket{\\vb v|\\vb u}}{v^2} \\ket{\\vb v,0} + \\ket{\\vb u}= \\beta\\left(1-\\frac{ \\braket{{\\vb v}|\\vb u,0}}{c^2}  \\right) \\ket{\\vb{u}',0}."
                    )}

                    or,

                    {eq(" (\\beta-1) \\frac{\\braket{\\vb v|\\vb u}}{v^2} \\ket{\\vb v,0}-\\beta\\ket{\\vb v,0}+ \\ket{\\vb u}= \\beta\\left(1-\\frac{ \\braket{{\\vb v}|\\vb u,0}}{c^2}  \\right) \\ket{\\vb{u}',0}"
                        , "Velocities relationship", pageName)}

                    from which we readily obtain the velocity {mt("\\ket{\\vb u}'")} as,

                    {eq(" \\ket{\\vb{u}',0}=\\frac{1}{\\left(1-\\frac{ \\braket{{\\vb v}|\\vb u}}{c^2}  \\right)} \\left(\\frac{(\\beta-1)}{\\beta} \\frac{\\braket{\\vb v|\\vb u}}{v^2} \\ket{\\vb v,0}-\\ket{\\vb v,0}+ \\frac{\\ket{\\vb u,0}}{\\beta}\\right)."
                        , "Inverse Velocity Composition", pageName)}

                    The velocity {mt("\\ket{\\vb u}")} can  be easliy expressed in terms of the velocity {mt("\\ket{\\vb u'}")} by exchanging the roles of {mt("\\ket{\\vb u}")} and {mt("\\ket{\\vb u'}")} in the equation above, and changing
                    the sign of the velocity. <br />

                    As an exercise, we will derive the same result in a more general way by inverting the equation above. We start by factoring the velocity {mt("\\ket{\\vb u}")} in {ref('Velocities relationship', pageName)}
                    and express the equation as an operator on the velocity {mt("\\ket{\\vb u}")},

                    {eq("\\left(\\frac{\\beta}{v^2}\\ket{\\vb v}\\bra{\\vb v}  + \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0} +  \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}+ \\frac{\\beta}{c^2}\\ket{\\vb u'}\\bra{\\vb v}  \\right)\\ket{\\vb u} = " +
                        "\\beta\\left(\\ket{\\vb{u}'}+\\ket{\\vb{v}}\\right)")}

                    Further expanding the equation above in the components of {mt("\\ket{{\\vb u}'}")} , we get
                    {eq("\\left(\\beta \\left(1 +\\frac{ v} {c^2}u'_1\\right)\\,\\,\\ket{{\\vb e}_1,0}\\bra{{\\vb e}_1,0} + \\beta\\frac{ v} {c^2}u'_2\\,\\,\\ket{{\\vb e}_2,0}\\bra{{\\vb e}_1,0}+"
                        + "\\beta\\frac{ v} {c^2}u'_3\\,\\,\\ket{{\\vb e}_3,0}\\bra{{\\vb e}_1,0} +\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}  + \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}" +
                        "\\right)\\cdot\\ket{\\vb{u},0}=\\beta\\left(\\ket{\\vb{u}'}+\\ket{\\vb{v}}\\right).")}

                    The operator,

                    {eq("\\beta \\left(1 +\\frac{ v} {c^2}u'_1\\right)\\,\\,\\ket{{\\vb e}_1,0}\\bra{{\\vb e}_1,0} + \\beta\\frac{ v} {c^2}u'_2\\,\\,\\ket{{\\vb e}_2,0}\\bra{{\\vb e}_1,0}+"
                        + "\\beta\\frac{ v} {c^2}u'_3\\,\\,\\ket{{\\vb e}_3,0}\\bra{{\\vb e}_1,0} +\\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0}  + \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}")}

                    can be easily inverted as,

                    {eq("\\frac{1}{\\beta \\left( 1 +\\frac{ v} {c^2}u'_1\\right)}\\,\\,\\ket{{\\vb e}_1,0 }\\bra{{\\vb e}_1,0}-\\frac{ v} {c^2}\\frac{u'_2}{(1 +\\frac{ v} {c^2}u'_1)}\\,\\,\\ket{{\\vb e}_2,0}\\bra{{\\vb e}_1,0}" +
                        "-\\frac{ v} {c^2}\\frac{u'_3}{(1 +\\frac{ v} {c^2}u'_1)}\\,\\,\\ket{{\\vb e}_3,0}\\bra{{\\vb e}_1,0}+ \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0} +\\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}")}

                    We can express the velocity {mt("\\ket{{\\vb u}}")}  as,


                    {eq(mtx("matrix", "\\ket{{\\vb u},0}=\\left(\\frac{1}{\\beta (1+ \\frac{v} {c ^ 2} u'_1)}\\,\\,\\ket{{\\vb e}_1,0}\\bra{{\\vb e}_1,0}-\\frac{v} {c ^ 2}\\frac{u'_2}{(1 +\\frac{ v} {c^2}u'_1)}\\,\\,\\ket{{\\vb e}_2,0}\\bra{{\\vb e}_1,0}" +
                        "-\\frac{v} {c ^ 2}\\frac{u'_3}{(1 +\\frac{ v} {c^2}u'_1)}\\,\\,\\ket{{\\vb e}_3,0}\\bra{{\\vb e}_1,0}+ \\ket{\\vb{e}_2,0}\\bra{\\vb{e}_2,0} + \\ket{\\vb{e}_3,0}\\bra{\\vb{e}_3,0}\\right)\\\\[0.3em]", "\\cdot \\left({v}\\beta \\ket{\\vb{e}_1,0}" +
                    "+\\beta\\ket{\\vb{u}'}\\right)"))}



                    <p>which finally simplifies to,</p>

                    {eq(" \\ket{{\\vb u},0}= \\frac{1}{(1 +\\frac{v} {c ^ 2}u'_1)} \\left((v+u'_1)\\ket{{\\vb e}_1,0} - \\sqrt{1 -\\ds\\frac{v ^ 2}{c ^ 2}} u'_2 \\ket{\\vb{e}_2,0} - " +
                        "\\sqrt{1 -\\ds\\frac{v ^ 2}{c ^ 2}} u'_3 \\ket{\\vb{e}_3,0}  \\right)")}

                    By dropping the explicit time dependence, we can write the above equation in a more elengant form as,

                    {eq(" \\ket{\\vb{u}}= \\frac{1}{ 1 +\\ds\\frac{ \\braket{{\\vb v}|{\\vb{u}' }}} {c^2}}\\left(\\frac{(\\beta-1)}{\\beta} \\frac{ \\braket{{\\vb u'} |{\\vb v}} }{v^2}\\ket{\\vb v}+\\ket{\\vb v} +\\frac{\\ket{\\vb u'}}{\\beta}\\right)",
                        "Velocity Composition", pageName)}

                </section>

            </MathSection>

            <MathSection title='Limit Formulas'>


                In this section we are going to derive the limit formulas for the composition of velocities when one of the velocities approache the speed of light.
                We start by considering the limit of the velocity composition formula {ref('Velocity Composition', pageName)} when the velocity {mt("\\ket{\\vb u'}")} approaches the speed of light.

                <section>
                    <h2> {mt("\\ket{{\\vb u}}")} Approaching Speed of Light</h2>

                    We start by first considering the case where {mt("\\ket{{\\vb u}}")} approaches the speed of light {mt("c")} and we will determine the value that  {mt("\\ket{{\\vb u}'}")} reaches. To achieve this, we
                    need to compute the module of {mt("\\ket{{\\vb u}'}")} from  {ref('Inverse Velocity Composition', pageName)}, which reads

                    {eq(" u'^2 =\\frac{1}{\\left(1-\\frac{ \\braket{{\\vb v}|\\vb u}}{c^2}  \\right)^2} \\left( \\frac{\\braket{{\\vb u} |{\\vb v}}^2 }{c^2}+v^2 +\\frac{u^2}{\\beta^2}-2 \\braket{{\\vb u} |{\\vb v}}\\right) ")}

                    when  {mt("\\ket{{\\vb u}}= c \\ket{{\\vb n}}")}, where {mt("\\ket{{\\vb n}}")} is a unitary vector, the equation above simplifies to

                    {eq(" u'^2 =\\frac{c^2}{\\left(1-\\frac{ \\braket{{\\vb v}|\\vb n}}{c}  \\right)^2} \\left(1-\\frac{ \\braket{{\\vb v}|\\vb n}}{c}  \\right )^2 =c^2")}

                    which implies that the velocity {mt("\\ket{{\\vb u}'}")} reaches the speed of light when {mt("\\ket{{\\vb u}}")} approaches the speed of light.

                </section>

                <section>
                    <h2> {mt("\\ket{{\\vb u}'}")} Approaching Speed of Light</h2>

                    Similarly, we can determine the limit of the velocity {mt("\\ket{{\\vb u}}")} when the velocity {mt("\\ket{{\\vb u}'}")} approaches the speed of light. From the velocity composition formula {ref('Velocity Composition', pageName)},
                    the module of the velocity {mt("\\ket{{\\vb u}}")} reads,

                    {eq(" u^2 =\\frac{1}{\\left(1+\\frac{ \\braket{{\\vb v}|\\vb u'}}{c^2}  \\right)^2} \\left( \\frac{\\braket{{\\vb u'} |{\\vb v}}^2 }{v^2}+v^2 +\\frac{u'^2}{\\beta^2}+2 \\braket{{\\vb u'} |{\\vb v}}\\right) ")}

                    which is the same equation for the module of {mt("\\ket{{\\vb u}}")} with the sign of the velocity  {mt("\\ket{{\\vb v}}")} reversed.
                    When  {mt("\\ket{{\\vb u}'}= c \\ket{{\\vb n}}")}, where {mt("\\ket{{\\vb n}}")} is a unitary vector, the equation above simplifies to

                    {eq(" u^2 =\\frac{c^2}{\\left(1+\\frac{ \\braket{{\\vb v}|\\vb n}}{c}  \\right)^2} \\left(1+\\frac{ \\braket{{\\vb v}|\\vb n}}{c}  \\right )^2 =c^2")}

                    which, also in this case, means that the velocity {mt("\\ket{{\\vb u}}")} reaches the speed of light when {mt("\\ket{{\\vb u}'}")} approaches the speed of light.

                </section>


                <section>
                    <h2> {mt("\\ket{{\\vb v}}")} Approaching Speed of Light</h2>

                    Following the same logic, when the velocity  {mt("\\ket{{\\vb v}}= c \\ket{{\\vb n}}")} , the module of the velocity {mt("\\ket{{\\vb u}}")} reads,

                    {eq(" u^2 =\\frac{c^2}{\\left(1+\\frac{ \\braket{{\\vb u}'|\\vb n}}{c}  \\right)^2} \\left(1+\\frac{ \\braket{{\\vb u}'|\\vb n}}{c}  \\right )^2 =c^2")}

                    independently of the value of the velocity {mt("\\ket{{\\vb u}'}")}.

                </section>

            </MathSection>
        </Stack >

    );

}
/* 

<h1>Composition of Accelerations</h1>



<p>The composition of accelerations is computed by performing the time derivative of the velocity ($\\ref{nice}$)</p>



\\begin{align*}
\\ket{\\vb{a}}&amp;= -\\frac{1}{\\left( 1 +\\ds\\frac{ \\bra{\\vb v}\\ket{\\vb{u'} }} {c^2}\\right)^2}
\\left(
\\ket{\\vb v} +
%
\\alpha_v \\ket{\\vb u'}
+\\left(1-\\alpha_v\\right)\\frac{ \\bra{\\vb u'}\\ket{\\vb v}}{v^2}\\ket{\\vb v}
\\right)\\frac{ \\bra{\\vb a'}\\ket{\\vb{v} }} {c^2}\\frac{dt'}{dt} \\\\
&amp;+\\frac{1}{ 1 +\\ds\\frac{ \\bra{\\vb v}\\ket{\\vb{u'} }} {c^2}
                        }
\\left(

%
\\alpha_v \\ket{\\vb a'}
+\\left(1-\\alpha_v\\right)\\frac{ \\bra{\\vb a'}\\ket{\\vb v}}{v^2}\\ket{\\vb v}
\\right)\\frac{dt'}{dt}
\\end{align*}



<p>The derivative $dt'/dt$ reads, using equation (\\ref{pkl})  and (\\ref{nice}),</p>



\\begin{equation}
\\frac{dt'}{dt} = \\frac{\\alpha}{1 +\\ds\\frac{ \\bra{\\vb v}\\ket{\\vb{u'} }} {c^2}}
\\end{equation}



<p>substituted in the  acceleration expressions $\\ket{\\vb a}$ yields</p>



\\begin{align*}
\\ket{\\vb{a}}&amp;= \\frac{\\alpha}{\\left( 1 +\\ds\\frac{ \\bra{\\vb v}\\ket{\\vb{u'} }} {c^2}\\right)^3}
\\left[
-\\left(
\\ket{\\vb v} +
%
\\alpha_v \\ket{\\vb u'}
+\\left(1-\\alpha_v\\right)\\frac{ \\bra{\\vb u'}\\ket{\\vb v}}{v^2}\\ket{\\vb v}
\\right)\\frac{ \\bra{\\vb a'}\\ket{\\vb{v} }} {c^2} \\right.  \\\\
&amp;\\left.+( 1 +\\ds\\frac{ \\bra{\\vb v}\\ket{\\vb{u'} }} {c^2})
                       
\\left(

%
\\alpha_v \\ket{\\vb a'}
+\\left(1-\\alpha_v\\right)\\frac{ \\bra{\\vb a'}\\ket{\\vb v}}{v^2}\\ket{\\vb v}
\\right) \\right]

\\end{align*}



<p>which simplifies to the final expression,</p>



\\begin{equation}
\\ket{\\vb{a}}= \\frac{\\alpha^2}{\\left( 1 +\\ds\\frac{ \\bra{\\vb v}\\ket{\\vb{u'} }} {c^2}\\right)^2} \\ket{\\vb a'} + \\;

 \\frac{\\alpha^2(\\alpha-1)\\bra{\\vb a'}\\ket{\\vb v}}{v^2\\left( 1 +\\ds\\frac{ \\bra{\\vb v}\\ket{\\vb{u'} }} {c^2}\\right)^3} \\ket{\\vb v}\\:

- \\frac{\\alpha^2 \\bra{\\vb a'}\\ket{\\vb v}}{c^2\\left( 1 +\\ds\\frac{ \\bra{\\vb v}\\ket{\\vb{u'} }} {c^2}\\right)^3}\\ket{\\vb u'}\\label{acc}
\\end{equation}


 */