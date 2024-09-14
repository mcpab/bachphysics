// Code for the page at /relativistic-maxwell-equations

import 'katex/dist/katex.min.css';
import '@/styles/katexCustom.css';
import { eq, mt, ref, mtx } from '@/src/katex/supportFunction';
import SectionsMenusLayout from '@/src/SectionsMenusLayout';
import Section from '@/src/katex/SectionClass';
import { SectionType } from '@/src/types';

const pageName = 'relativistic-maxwell-equations';

export default function Page() {

    let sections = new Section('The Relativistic Maxwell Equations');

    let introduction = sections.addSection('Introduction');

    introduction.setContent(<>
        In this segment, we will explore the derivation of the Maxwell equations’ transformation for a general velocity boost in any given direction.

        Traditionally, the derivation of relativistic Maxwell equations is tackled through differential geometry. Einstein’s seminal work utilized standard multivariate calculus, albeit
        limited to boosts aligned with coordinate axes. Extending this to boosts in arbitrary directions significantly complicates the calculus involved,
        a topic seldom addressed in existing literature or online resources.

        Our journey through the relativistic Maxwell equations will be rooted in multivariate calculus. The foundational definitions and indispensable formulas
        will be laid out in the opening section, setting the stage for the intricate derivations that follow.

        The subsequent section delves into the transformation of key differential operators—divergence and curl—under the Lorentz transformation, a pivotal step in understanding the equations’ behavior under relativistic conditions.

        Culminating in the final section, we will tackle the derivation of the relativistic Maxwell equations within a realm devoid of charges and currents, showcasing the equations’ purest form in a charge-free vacuum.
    </>);

    introduction.addSection('Definitions and Useful Formulas from Multivariate Calculus').setContent(<> We will consider a stationary system of reference where the coordinates of an event are represented by the four-vector {mt("x_1,x_2,x_3,t")}, and a moving frame where the same event has coordinates {mt("x'_1,x'_2,x'_3,t'")}.
        The fourth coordinate in both four-vectors has units of time, not space, as the mathematics of the Maxwell equations derivation becomes a little less notation-heavy this way. <br />

        A vector field {mt("\\vb A")} is a three-dimensional valued function acting on a four-vector,

        {eq(mtx("matrix", "{\\vb A}(x_1,x_2,x_3,t)", "{\\vb A}: R^4 \\to R^3"))}

        A few differential operators of {mt("\\vb A")} are extensively used in the derivation below and deserve to be explicitly defined to minimize confusion when the notation will get a little heavy,
        as it often does in the derivation of the relativistic Maxwell equations.

        <ul>
            <li> The Jacobian on the spatial dimensions and time
                {eq("\\grad\\vb A_{x,t}= " + mtx("align", "\\pdv{A_1}{x_1}&\\pdv{A_1}{x_2}&\\pdv{A_1}{x_3}&\\pdv{A_1}{t}",
                    "\\pdv{A_2}{x_1}&\\pdv{A_2}{x_2}&\\pdv{A_2}{x_3}&\\pdv{A_2}{t} ",
                    "\\pdv{A_3}{x_1}&\\pdv{A_3}{x_2}&\\pdv{A_3}{x_3}&\\pdv{A_3}{t}  "))}
            </li>
            <li> The Jacobian on the spatial dimensions
                {eq("\\grad\\vb A_{x}= \\ds" + mtx("align", " \\pdv{A_1}{x_1} & \\pdv{A_1}{x_2} & \\pdv{A_1}{x_3}\\rule{0pt}{3ex}",
                    "\\pdv{A_2}{x_1} & \\pdv{A_2}{x_2} & \\pdv{A_2}{x_3}\\rule{0pt}{3ex}",
                    "\\pdv{A_3}{x_1} & \\pdv{A_3}{x_2} & \\pdv{A_3}{x_3}\\rule{0pt}{3ex}"))}
            </li>
            <li> The Jacobian for the spatial dimension applied to a vector, typically a velocity {mt("\\vb v")}
                {eq("\\grad {\\vb A}_x\\cdot {\\vb v}=" + mtx("align", "\\pdv{A_1}{x_1}v_1 & \\pdv{A_1}{x_2}v_2 & \\pdv{A_1}{x_3}v_3", "\\pdv{A_2}{x_1}v_1 & \\pdv{A_2}{x_2}v_2 & \\pdv{A_2}{x_3}v_3 \\rule{0pt}{3ex}", "\\pdv{A_3}{x_1}v_1 & \\pdv{A_3}{x_2}v_2 & \\pdv{A_3}{x_3}v_3\\rule{0pt}{3ex}"))}
            </li>
            <li> The divergence of a vector field {mt("\\vb A")}
                {eq("\\div\\vb A=\\pdv{A_1}{x_1}+\\pdv{A_2}{x_2}+\\pdv{A_3}{x_3}")}
            </li>
            <li> and finally the curl of a vector field {mt("\\vb A")}
                {eq("\\curl\\vb A= \\left(\\pdv{A_3}{x_2}-\\pdv{A_2}{x_3} \\right) \\vb e_1 - \\left(\\pdv{A_3}{x_1}-\\pdv{A_1}{x_3} \\right) \\vb e_2 + \\left(\\pdv{A_2}{x_1}-\\pdv{A_1}{x_2} \\right) \\vb e_3")}

                where {mt("\\vb e_1")}, {mt("\\vb e_2")} and {mt("\\vb e_3")} are unitary vectors along the three spatial axes.
            </li>
        </ul>

        A few identities from calculus are key to derive the relativistic Maxwell equations, and they are listed below:

        <ul>
            <li>the divergence and the curl of the cross product of a constant vector {mt("\\vb v")} and a field {mt("\\vb A")}
                {eq(mtx("align", "\\curl (\\vb v \\times \\vb A)  &=  - \\grad_x \\vb A\\cdot \\vb v + (\\div \\vb A) \\vb v",
                    "\\div ( \\vb v \\times \\vb A ) & = - \\braket{\\vb v | \\curl \\vb A} "), "divergence-and-curl-cross-product", pageName)}
            </li>
            <li>the curl of the triple product of a constant vector {mt("\\vb v")} with a field {mt("\\vb A")}, which has two different expressions, the latter derived with the use of the equations above,
                {eq(mtx("matrix", "\\curl(\\vb v\\times (\\vb v\\times\\vb A)) &= \\curl ( \\braket{\\vb v|\\vb A}\\vb v - v^2\\vb A)",
                    "\\curl(\\vb v\\times(\\vb v\\times\\vb A)) & =- \\grad_x({\\vb v \\times \\vb A})\\cdot\\vb v + \\div{(\\vb v \\times \\vb A)}\\vb v  \\rule{0pt}{3ex}",
                    "& = - \\vb v \\times (\\grad_x\\vb A\\cdot \\vb v) -\\braket{\\vb v|\\curl \\vb A}\\vb v ) \\rule{0pt}{3ex}"),
                    "curl-of-triple-product", pageName)}

            </li>
        </ul>
    </>);

    let differential = sections.addSection('Transformation of Differential Operators');

    differential.setContent(
        <> Before working on the Maxwell equations, we need to understand how the differential operators transform between {mt("F")} and {mt("F'")}. We consider a field {mt("A")} in {mt("F")},

            {eq(mtx("matrix", "\\vb A = A(x_1,x_2,x_3,t)", "\\vb A: R^4 \\to R^3"))}


            which we compose with the {ref("inverse of Lorentz transformation", 'time-and-space')} from {mt("F'")} to {mt("F")} obtaining a field {mt("\\vb A'")} defined on the space {mt("F'")},

            {eq(mtx("align", "{\\vb A'} & = {\\vb A}\\circ  {\\bf \\Lambda} (-{\\vb v})",
                "{\\vb A'} & = {\\vb A'}({\\vb x'},t') = {\\vb A}(\\; {\\bf \\Lambda} (-{\\vb v})({\\vb x'},t'))\\rule{0pt}{3ex}",
                "{\\vb A'} &:  R^4 \\to R^3\\rule{0pt}{3ex}"
            ))}


            Since the Maxwell equations are in {mt("F")} coordinates, we need to understand how the partial derivatives of the field {mt("A'")} transform under the Lorentz transformation, which we are able to compute from the Jacobian chain rule,

            {eq("\\grad_{x',t'}{\\vb A'} = \\grad_{x,t}{\\vb A}\\cdot \\grad_{x',t'}({ {\\bf \\Lambda} (-{\\vb v})({\\vb x'},t')})")}

            where {mt("\\grad_{x',t'}{\\vb A'}")} and {mt("\\grad_{x,t}{\\vb A}")} are the Jacobians of {mt("\\vb A'")} and {mt("\\vb A")} and respectively, computed in their own coordinate systems.

            The Lorentz transformation is linear, hence the Jacobian is {mt("\\Lambda")}, and the chain rule becomes explicitly in coordinate form

            {eq(mtx("align", "\\ds\\pdv{A'_1}{x'_1} &\\ds\\pdv{A'_1}{x'_2} &\\ds\\pdv{A'_1}{x'_3} &\\ds\\pdv{A'_1}{t'}",
                "\\ds\\pdv{A'_2}{x'_1} &\\ds\\pdv{A'_2}{x'_2} &\\ds\\pdv{A'_2}{x'_3} &\\ds\\pdv{A'_2}{t'}", "\\pdv{A'_3}{x'_1} &\\pdv{A'_3}{x'_2} &\\pdv{A'_3}{x'_3} &\\pdv{A'_3}{t'}") +
                "=" +
                mtx("align", "\\ds\\pdv{A_1}{x_1} &\\ds\\pdv{A_1}{x_2} &\\ds\\pdv{A_1}{x_3} &\\ds\\pdv{A_1}{t}",
                    "\\ds\\pdv{A_2}{x_1} &\\ds\\pdv{A_2}{x_2} &\\ds\\pdv{A_2}{x_3} &\\ds\\pdv{A_2}{t}",
                    "\\ds\\pdv{A_3}{x_1} &\\ds\\pdv{A_3}{x_2} &\\ds\\pdv{A_3}{x_3}&\\ds\\pdv{A_3}{t}") +
                "\\cdot \\Lambda(-{\\vb v}) ")}

            To get to the partial derivatives of {mt("\\vb A")} we need to invert the equation above,


            {eq(mtx("align", "\\ds\\pdv{A'_1}{x'_1} &\\ds\\pdv{A'_1}{x'_2} &\\ds\\pdv{A'_1}{x'_3} &\\ds\\pdv{A'_1}{t'}",
                "\\ds\\pdv{A'_2}{x'_1} &\\ds\\pdv{A'_2}{x'_2} &\\ds\\pdv{A'_2}{x'_3} &\\ds\\pdv{A'_2}{t'}",
                "\\ds\\pdv{A'_3}{x'_1} &\\ds\\pdv{A'_3}{x'_2} &\\ds\\pdv{A'_3}{x'_3}&\\ds\\pdv{A'_3}{t'}") +
                "\\cdot \\Lambda({\\vb v})=" +
                mtx("align", "\\ds\\pdv{A_1}{x_1} &\\ds\\pdv{A_1}{x_2} &\\ds\\pdv{A_1}{x_3} &\\ds\\pdv{A_1}{t}",
                    "\\ds\\pdv{A_2}{x_1} &\\ds\\pdv{A_2}{x_2} &\\ds\\pdv{A_2}{x_3} &\\ds\\pdv{A_2}{t}",
                    "\\ds\\pdv{A_3}{x_1} &\\ds\\pdv{A_3}{x_2} &\\ds\\pdv{A_3}{x_3}&\\ds\\pdv{A_3}{t}")
            )}

            The bra-ket formalism helps us here once again to compute the product of the Jacobian matrices. Any row {mt("j")} of {mt("\\grad_{x',t'}{\\vb A'} \\cdot {\\Lambda}(\\vb v)")} is the vector

            {eq("\\bra{\\ds\\pdv{A'_j}{x'_1},\\ds\\pdv{A'_j}{x'_2}, \\ds\\pdv{A'_j}{x'_3} ,\\ds\\pdv{A'_j}{t'}} \\frac{\\beta}{v^2} \\ket{\\vb v,0}\\bra{\\vb{v},0}  -\\ds{\\beta}\\ket{\\vb{v},0}\\bra{\\vb{0},1}+" +
                "(\\vb{I}-\\frac{1}{v^2}\\ket{\\vb{v},0}\\bra{\\vb{v},0})-\\frac{ \\beta} {c^2} \\ket{\\vb{0},1}\\bra{\\vb{v},0}+\\beta \\ket{\\vb{0},1}\\bra{\\vb{0},1}")}

            where {mt("\\vb{I}")} is the identity operator, and reads,

            {eq("\\frac{\\beta}{v^2}\\braket{\\grad_{x'}{\\vb A'_j}|\\vb{v}}\\bra{\\vb{v},0}  -\\ds{\\beta}\\braket{\\grad_{x'}{\\vb A'_j}|\\vb{v}}\\bra{\\vb{0},1}+\\bra{\\grad_{x'}{\\vb A'_j},0}-\\frac{1}{v^2}\\braket{\\grad_{x'}{\\vb A'_j}|\\vb{v}}\\bra{\\vb{v},0}" +
                "-\\frac{ \\beta} {c^2}  \\ds\\pdv{A'_j}{t'} \\bra{\\vb{v},0}+\\beta \\ds\\pdv{A'_j}{t'}\\bra{\\vb{0},1}")}

            The spatial gradient of any of the component of the field {mt("\\vb A")}  computed in {mt("(\\vb x,t)= \\Lambda'(-\\vb v)(\\vb x',t')")}, is

            {eq("\\grad_x{\\vb A}_j =  \\grad_{x'}{\\vb A'_j} +\\frac{\\beta-1}{v^2}\\braket{\\grad_{x'}{\\vb A'_j} |\\vb{v}}\\bra{\\vb{v}}  -\\frac{ \\beta} {c^2}  \\ds\\pdv{A'_j}{t'} \\bra{\\vb{v}}", "gradient-in-F", pageName)}

            and the time derivative is
            {eq("\\ds\\pdv{A_j}{t} = -\\ds{\\beta}\\braket{\\grad_{x'}{\\vb A'_j}|\\vb{v}} +\\ds\\beta\\pdv{A'_j}{t'}", "time-derivative-in-F", pageName)}

            where,

            {eq(mtx("align", "\\grad_{x'} \\vb A'_j & = \\bra{ \\ds\\pdv{A'_j}{x'_1}, \\ds\\pdv{A'_j}{x'_2},  \\ds\\pdv{A'_j}{x'_3} }",
                "\\grad_x \\vb A_j & = \\bra{ \\ds\\pdv{A_j}{x_1}, \\ds\\pdv{A_j}{x_2},  \\ds\\pdv{A_j}{x_3} }"))} </>);



    differential.addSection(`Divergence in F and F`).setContent(
        <> we now use {(ref("gradient-in-F", pageName))} to compute the divergence of the field {mt("\\vb A")} in {mt("F")},

            {eq(mtx("align", "\\ds\\pdv{A_1}{x_1} &= \\pdv{A'_1}{x'_1}+ \\frac{\\beta-1}{v^2}\\braket{\\grad_{x'}{\\vb A'_1}  | \\vb{v}}{{v}_1}-\\frac{ \\beta} {c^2}  \\ds\\pdv{A'_1}{t'} v_1",
                "\\ds\\pdv{A_2}{x_2} &= \\pdv{A'_2}{x'_2}+ \\frac{\\beta-1}{v^2}\\braket{\\grad_{x'}{\\vb A'_2}  | \\vb{v}}{{v}_2}-\\frac{ \\beta}{c^2}  \\ds\\pdv{A'_2}{t'} v_2 ",
                "\\ds\\pdv{A_3}{x_3} &= \\pdv{A'_3}{x'_3}+ \\frac{\\beta-1}{v^2}\\braket{\\grad_{x'}{\\vb A'_3}  | \\vb{v}}{{v}_3}-\\frac{ \\beta} {c^2}  \\ds\\pdv{A'_3}{t'} v_3"
            ))}

            To derive an expression for the field divergence, we expand the scalar products in the equation above and group the terms on the partial derivative along each coordinate.
            We will work out the details for the first equation, as the others are identically derived by just changing the indexes.

            {eq(mtx("align", "\\ds\\pdv{A_1}{x_1} &= \\pdv{A'_1}{x'_1}+ \\frac{\\beta-1}{v^2}\\braket{\\grad_{x'}{\\vb A'_1}  | \\vb{v}}{{v}_1}-\\frac{ \\beta} {c^2}  \\ds\\pdv{A'_1}{t'} v_1",
                "& =  \\pdv{A'_1}{x'_1}+ \\frac{\\beta-1}{v^2} \\left(\\ds\\pdv{A'_1}{x'_1}v_1+\\ds\\pdv{A'_1}{x'_2}v_2+  \\ds\\pdv{A'_1}{x'_3} v_3\\right)v_1-\\frac{ \\beta} {c^2}  \\ds\\pdv{A'_1}{t'} v_1 ",
                "&= (1 +  \\frac{\\beta-1}{v^2}v_1^2 ) \\pdv{A'_1}{x'_1} +  \\frac{\\beta-1}{v^2} \\left(\\ds\\pdv{(A'_1\\cdot v_1)}{x'_2}v_2+  \\ds\\pdv{(A'_1\\cdot v_1)}{x'_3} v_3\\right) -\\frac{ \\beta} {c^2}  \\ds\\pdv{(A'_1\\cdot v_1)}{t'}"
            ))}

            The divergence of the field in {mt("F")} is,

            {eq(mtx("align", "\\ds\\pdv{A_1}{x_1}+ \\ds\\pdv{A_2}{x_2}+\\ds\\pdv{A_2}{x_2} &= (1 +  \\frac{\\beta-1}{v^2}v_1^2 ) \\pdv{A'_1}{x'_1} +  \\frac{\\beta-1}{v^2} \\left(\\ds\\pdv{(A'_1\\cdot v_1)}{x'_2}v_2+  \\ds\\pdv{(A'_1\\cdot v_1)}{x'_3} v_3\\right) -\\frac{ \\beta} {c^2}  \\ds\\pdv{(A'_1\\cdot v_1)}{t'}  +",
                "&(1 +  \\frac{\\beta-1}{v^2}v_2^2 ) \\pdv{A'_2}{x'_2} +  \\frac{\\beta-1}{v^2} \\left(\\ds\\pdv{(A'_2\\cdot v_2)}{x'_1}v_1+  \\ds\\pdv{(A'_2\\cdot v_2)}{x'_3} v_3\\right) -\\frac{ \\beta} {c^2}  \\ds\\pdv{(A'_2\\cdot v_2)}{t'}  +",
                "&(1 +  \\frac{\\beta-1}{v^2}v_3^2 ) \\pdv{A'_3}{x'_3} +  \\frac{\\beta-1}{v^2} \\left(\\ds\\pdv{(A'_3\\cdot v_3)}{x'_1}v_1+  \\ds\\pdv{(A'_3\\cdot v_3)}{x'_2} v_2\\right) -\\frac{ \\beta} {c^2}  \\ds\\pdv{(A'_3\\cdot v_3)}{t'}  "
            ))}

            by grouping the terms by the components of the field {mt("A")}, we obtain the divergence of the field {mt("A")} in {mt("F")},

            {eq(mtx("align", "\\ds\\pdv{A_1}{x_1}+ \\ds\\pdv{A_2}{x_2}+\\ds\\pdv{A_2}{x_2} & = \\pdv{A'_1}{x'_1}+\\pdv{A'_2}{x'_2}+\\pdv{A'_3}{x'_3}",
                "& +  \\frac{\\beta-1}{v^2}( \\pdv{A'_1}{x'_1}\\cdot v_1 + \\pdv{A'_1}{x'_2}\\cdot v_2 + \\pdv{A'_1}{x'_3}\\cdot v_3)  v_1",
                "&+  \\frac{\\beta-1}{v^2}( \\pdv{A'_2}{x'_1}\\cdot v_1 + \\pdv{A'_2}{x'_2}\\cdot v_2 + \\pdv{A'_2}{x'_3}\\cdot v_3)  v_2 ",
                "&+  \\frac{\\beta-1}{v^2}( \\pdv{A'_3}{x'_1}\\cdot v_1 + \\pdv{A'_3}{x'_2}\\cdot v_2 + \\pdv{A'_3}{x'_3}\\cdot v_3)  v_2",
                "&     -\\frac{ \\beta} {c^2}  \\ds\\pdv{( A'_1\\cdot v_1 + A'_2\\cdot v_2+A'_3\\cdot v_3)}{t'}"))}

            we get the compact equation for the transformation of the divergence of {mt("\\vb A")} to {mt("\\vb A'")},


            {eq("\\div{\\vb A} = \\div \\vb A' +  \\frac{\\beta-1}{v^2}\\braket{\\grad_{x'}\\vb A'\\cdot \\vb v | \\vb v}    -\\frac{ \\beta} {c^2}  \\ds\\pdv{\\bra{\\vb A'}\\ket{\\vb v}}{t'}")}

            If we consider a divergence-free field {mt("A")} in {mt("F")}, the equation above gives an important condition on the divergence of {mt("\\vb A'")},

            {eq("\\div\\vb A' = -  \\frac{\\beta-1}{v^2}\\braket{\\grad_{x'}\\vb A'\\cdot \\vb v | \\vb v}    +\\frac{ \\beta} {c^2}  \\ds\\pdv{\\bra{\\vb A'}\\ket{\\vb v}}{t'}", "divergence-in-F'", pageName)}</>);

    differential.addSection(`Curl in F and F`).setContent(
        <>The other operator needed for the Maxwell equations is the curl,

            {eq(mtx("align", "(\\curl{\\vb A})_1 &= \\ds\\pdv{A_3}{x_2} -\\ds\\pdv{A_2}{x_3} = \\pdv{A'_3}{x'_2}+ \\frac{\\beta-1}{v^2}\\braket{\\grad_{x'}{\\vb A'_3}  | \\vb{v}}{{v}_2}- \\ds\\frac{\\beta}{c^2}\\pdv{A'_3}{t'} v_2 -" +
                "\\pdv{A'_2}{x'_3} - \\frac{\\beta-1}{v^2}\\braket{\\grad_{x'}{\\vb A'_2}  | \\vb{v}}{{v}_3}+\\frac{\\beta}{c^2} \\ds\\pdv{A'_2}{t'} v_3  ",
                "(\\curl{\\vb A})_2 &= -\\ds\\pdv{A_3}{x_1} +\\ds\\pdv{A_1}{x_3} =- \\pdv{A'_3}{x'_1}- \\frac{\\beta-1}{v^2}\\braket{\\grad_{x'}{\\vb A'_3}  | \\vb{v}}{{v}_1}- \\ds\\frac{\\beta}{c^2}\\pdv{A'_3}{t'} v_1 -\\pdv{A'_1}{x'_3} - \\frac{\\beta-1}{v^2}\\braket{\\grad_{x'}{\\vb A'_1}  | \\vb{v}}{{v}_3}+\\frac{\\beta}{c^2} \\ds\\pdv{A'_1}{t'} v_3  ",
                "(\\curl{\\vb A})_3 &= \\ds\\pdv{A_2}{x_1} -\\ds\\pdv{A_1}{x_2} = \\pdv{A'_2}{x'_1}+ \\frac{\\beta-1}{v^2}\\braket{\\grad_{x'}{\\vb A'_2}  | \\vb{v}}{{v}_1}- \\ds\\frac{\\beta}{c^2}\\pdv{A'_2}{t'} v_1 -\\pdv{A'_1}{x'_2} - \\frac{\\beta-1}{v^2}\\braket{\\grad_{x'}{\\vb A'_1}  | \\vb{v}}{{v}_2}+\\frac{\\beta}{c^2} \\ds\\pdv{A'_1}{t'} v_2"))}

            which is in vector form easily recognizable as,

            {eq("\\curl{\\vb A} = \\curl{\\vb A'}+ \\frac{\\beta-1}{v^2} {\\vb v}\\times (\\grad_{x'}\\vb A'\\cdot\\vb v)-\\frac{\\beta}{c^2}\\pdv{\\vb v \\times\\vb A'}{t'}", "curl-in-F", pageName)}</>);

    let relativisticMaxwellEquations = sections.addSection('The Relativistic Maxwell Equations');

    relativisticMaxwellEquations.setContent(
        <>We consider an electric field {mt("\\vb E")} and a magnetic field {mt("\\vb B")} in a region of the system of reference {mt("F")} free of charges and currents. The Maxwell equations in this case are

            {eq(mtx("align", "\\ds\\pdv{\\vb B}{t}&=-\\curl{\\vb E}", "\\ds\\pdv{\\vb E}{t}&=c^2 \\curl{\\vb B} ", "\\div \\vb B &= 0", "\\div \\vb E &= 0"), "maxwell-equations-in-F", pageName)}

            The fields {mt("\\vb B'")} and {mt("\\vb E'")}, obtained by applying the composition of the Lorentz transformation are,

            {eq(mtx("align", "{\\vb B'} & = {\\vb B'}({\\vb x'},t') = {\\vb B}(\\; \\Lambda(-{\\vb v})({\\vb x'},t'))", "{\\vb E'} & = {\\vb E'}({\\vb x'},t') = {\\vb E}(\\; \\Lambda(-{\\vb v})({\\vb x'},t'))"))}

            and fulfill the equations obtained by applying directly the Lorentz transformation to equations {ref("maxwell-equations-in-F", pageName)} (see section <strong>Transformation of Differential Operators</strong>),

            {eq(mtx("align", "-\\beta (\\grad_{x'}\\vb B'\\cdot\\vb v) + \\beta \\pdv{\\vb B'}{t'} &=- \\curl{\\vb E'}- \\frac{\\beta-1}{v^2} {\\vb v}\\cross (\\grad_{x'}\\vb E'\\cdot\\vb v)+\\frac{\\beta}{c^2}\\pdv{\\vb v \\cross\\vb E'}{t'}",
                "-\\frac{\\beta}{c^2} (\\grad_{x'}\\vb E'\\cdot\\vb v) + \\frac{\\beta}{c^2} \\pdv{\\vb E'}{t'} &= \\curl{\\vb B'}+ \\frac{\\beta-1}{v^2} {\\vb v}\\cross \\left(\\grad_{x'}\\vb B'\\cdot\\vb v\\right)-\\frac{\\beta}{c^2}\\pdv{\\vb v \\cross\\vb B'}{t'}"),
                "maxwell-equations-transformed", pageName)}

            Since the equations at hand do not conform to the standard form of Maxwell’s equations, the fields denoted by B′ and E′ do not represent the transformed electric and magnetic fields we seek. Substantial effort is required to manipulate these equations
            into the correct form that yields the desired fields.

            We outline below the steps required to derive the relativistic Maxwell equations in a vacuum, starting with the equations above and manipulating them to obtain the correct form.</>);

    relativisticMaxwellEquations.addSection('Step 1: Divergence Free Fields').setContent(
        <>
            The scalar product of  {ref("maxwell-equations-in-F", pageName)} with the velocity {mt("\\vb v")} gives,

            {eq(mtx("align", "-\\beta \\braket{\\grad_{x'}\\vb B'\\cdot\\vb v | \\vb v}+ \\beta \\pdv{\\braket{\\vb B' | \\vb v}}{t'}&=- \\braket{\\curl{\\vb E'} | \\vb v}",
                "-\\frac{\\beta}{c^2} \\braket{\\grad_{x'}\\vb E'\\cdot\\vb v | \\vb v}+ \\frac{\\beta }{c^2}\\pdv{\\braket{\\vb E' | \\vb v}}{t'}&=\\bra{\\curl{\\vb B'}}\\ket{\\vb v}"))}

            together with the divergence-free condition of the fields {ref("divergence-in-F'", pageName)} ,  it gives a very useful expression for the divergence of {mt("\\vb B'")} and {mt("\\vb E'")},

            {eq(mtx("align", "\\div  \\vb B' &= \\frac{\\beta-1}{\\beta v^2}(\\pdv{\\braket{\\vb B' | \\vb v}}{t'} - \\bra{\\curl{\\vb E'}}\\ket{\\vb v}) ",
                "\\div\\vb E' &= \\frac{\\beta-1}{\\beta v^2}(\\pdv{\\braket{\\vb E' | \\vb v}}{t'} + c^2 \\bra{\\curl{\\vb B'}}\\ket{\\vb v})"))}

            The terms {mt("\\grad_{x'} \\vb B'\\cdot \\vb v")} and {mt("\\grad_{x'} \\vb E'\\cdot \\vb v")} in left side of {ref("maxwell-equations-transformed", pageName)} can be substituted from {ref("divergence-and-curl-cross-product", pageName)},
            and using the divergence of {mt("\\vb B'")} and {mt("\\vb E'")} just calculated,  we obtain,

            {eq(mtx("align", "\\pdv{}{t'}( \\beta\\;  \\vb B' - \\frac{\\beta-1}{  v^2} \\braket{\\vb B' | \\vb v} \\vb v -\\frac{\\beta}{c^2} \\vb v \\cross\\vb E' ) &=  -\\beta\\curl (\\vb v \\cross \\vb B')" +
                "-\\beta \\curl{\\vb E'} -   \\frac{\\beta-1}{  v^2} \\braket{\\curl{\\vb E'} | \\vb v}\\vb v- \\frac{\\beta-1}{v^2} {\\vb v}\\cross (\\grad_{x'}\\vb E'\\cdot\\vb v) ",
                "\\pdv{}{t'}( \\beta\\;  \\vb E' - \\frac{\\beta-1}{  v^2} \\braket{\\vb E' | \\vb v} \\vb v +\\beta \\vb v \\cross\\vb B' ) &=     -\\beta\\curl (\\vb v \\cross \\vb E')" +
                "+\\curl{(c^2\\vb B')} +\\frac{\\beta-1}{  v^2} \\braket{\\curl{(c^2\\vb B')} | \\vb v}\\vb v", "&+ \\frac{\\beta-1}{v^2} {\\vb v}\\cross (\\grad_{x'}(c^2\\vb B')\\cdot\\vb v)"), "divergence-free-fields", pageName)}

            We are nearing the solution: it is now necessary to apply the curl operation to the triple product.</>);

    relativisticMaxwellEquations.addSection('Step 2: the Curl of the Triple Product').setContent(

        <>The equations {ref("divergence-free-fields", pageName)} are getting us closer to the solution. We have on the left side the partial derivative with respect to the time {mt("t'")} of two fields.
            On the right side, we have a few curl operators, which it is what we need, but we still have terms that are not in curl form

            {eq("-   \\frac{\\beta-1}{  v^2} \\braket{\\curl{\\vb E'} | \\vb v}\\vb v- \\frac{\\beta-1}{v^2} {\\vb v}\\cross (\\grad_{x'}\\vb E'\\cdot\\vb v)")}

            The key to the solution here is to use the curl of the triple product, which is given by the equation {ref("curl-of-triple-product", pageName)},

            {eq(" \\curl(\\vb v\\cross (\\vb v\\cross\\vb E')) =\\curl ( \\bra{\\vb v}\\ket{\\vb E'}\\vb v - v^2\\vb E')   =  - \\vb v \\cross (\\grad_x\\vb E'\\cdot \\vb v) -\\bra{\\vb v}\\ket{\\curl \\vb E'}\\vb v ")}
            {eq(" \\curl(\\vb v\\cross (\\vb v\\cross\\vb E')) =\\curl ( \\bra{\\vb v}\\ket{\\vb E'}\\vb v - v^2\\vb E')   =  - \\vb v \\cross (\\grad_x\\vb E'\\cdot \\vb v) -\\bra{\\vb v}\\ket{\\curl \\vb E'}\\vb v ")}

            which substituted in the {ref("divergence-free-fields", pageName)} yields finally equations in the same operator form as equations the {ref("maxwell-equations-in-F", pageName)}, but now in the coordinates of {mt("F'")};

            {eq(mtx("align", "\\pdv{}{t'}\\left( \\beta\\;  \\vb B' - (\\beta-1) \\braket{\\vb B' | \\frac{\\vb v}{v}} \\frac{\\vb v}{v} -\\frac{\\beta}{c^2} \\vb v \\cross\\vb E'\\right) &= -  \\curl \\left( \\beta\\; \\vb E' \\;" +
                "- \\; (\\beta-1) \\braket{\\vb E' | \\frac{\\vb v}{v}}\\frac{\\vb v}{v}+ \\beta\\;\\vb v \\cross \\vb B' \\right)",
                "\\pdv{}{t'}\\left( \\beta\\;  \\vb E' - (\\beta-1) \\braket{\\vb E' | \\frac{\\vb v}{v}} \\frac{\\vb v}{v} +\\beta \\vb v \\cross \\vb B' \\right) & = " +
                "-  c^2 \\curl \\left(\\beta\\; \\vb B' \\; - \\; (\\beta-1) \\braket{\\vb B' | \\frac{\\vb v}{v}}\\frac{\\vb v}{v}-\\frac{ \\beta}{c^2}\\;\\vb v \\cross \\vb E' \\right) "
            ))}

            Hence for the principle of relativity, the electric and magnetic field in {mt("F'")} must be

            {eq(mtx("align", "\\vb B_F&=\\phi(\\vb v)\\left(\\beta\\;  \\vb B' - (\\beta-1) \\braket{\\vb B' | \\frac{\\vb v}{v}} \\frac{\\vb v}{v} -\\frac{\\beta}{c^2} \\vb v \\cross\\vb E'\\right)  &",
                "\\vb E_F & =  \\phi(\\vb v)\\left( \\beta\\;  \\vb E' - (\\beta-1) \\braket{\\vb E' | \\frac{\\vb v}{v}} \\frac{\\vb v}{v} +\\beta \\vb v \\cross\\vb B' \\right)"))}

            where {mt("\\phi(\\vb v)")} is a scalar function depending only on the velocity.

            The condition on the possible values of {mt("\\phi(\\vb v)")} can be found by requiring that the inversion of the electric and magnetic fields in {mt("F'")} is the identity,

            {eq(mtx("align", "\\vb B &=\\phi(-\\vb v)\\left(\\beta\\;  \\vb B_F - (\\beta-1) \\braket{\\vb B_F | \\frac{\\vb v}{v}} \\frac{\\vb v}{v} +\\frac{\\beta}{c^2} \\vb v \\cross\\vb E_F \\right)  &",
                "\\vb E & =  \\phi(-\\vb v)\\left( \\beta\\;  \\vb E_F - (\\beta-1) \\braket{\\vb E_F | \\frac{\\vb v}{v}} \\frac{\\vb v}{v}-\\beta \\vb v \\cross\\vb B_F \\right)"))}

            which gives the condition on {mt("\\phi(\\vb v)")},

            {eq("\\phi(-\\vb v)\\cdot\\phi(\\vb v)=1")}

            The transformed fields approach the original ones for {mt("\\vb v")} going to zero,

            {eq(mtx("align", "\\lim_{\\vb v \\to \\vb 0} \\vb B_F &= \\vb B", "\\lim_{\\vb v \\to \\vb 0} \\phi(\\vb v) &= 1"))}


            hence, for reason of continuity, {mt("\\phi(\\vb v)=1")}. The final form of the relativistic electric and magnetic fields is,

            {eq(mtx("align", "\\vb B_F&= \\left(\\beta\\;  \\vb B- (\\beta-1) \\braket{\\vb B | \\frac{\\vb v}{v}} \\frac{\\vb v}{v} -\\frac{\\beta}{c^2} \\vb v \\cross\\vb E\\right)  & ",
                "\\vb E_F & =   \\left( \\beta\\;  \\vb E - (\\beta-1) \\braket{\\vb E | \\frac{\\vb v}{v}} \\frac{\\vb v}{v} +\\beta \\vb v \\cross\\vb B \\right)"), "Relativistic-Maxwell-Equations", pageName)}</>);

    let sectionsToRender: SectionType = sections.getSections();

    return (
        <>
            <SectionsMenusLayout mainSection={sectionsToRender} />
        </>
    );

}