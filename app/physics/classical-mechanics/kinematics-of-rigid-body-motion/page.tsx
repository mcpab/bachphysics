// Code for the page at /relativistic-maxwell-equations

import 'katex/dist/katex.min.css';
import '@/styles/katexCustom.css';
import { eq, mt, ref, mtx } from '@/src/katex/supportFunction';
import SectionsMenusLayout from '@/src/SectionsMenusLayout';
import Section from '@/src/katex/SectionClass';
import { SectionType } from '@/src/types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import MediaAndText from '@/src/MediaAndTextGrid';

const pageName = 'kinematics-of-rigid-body-motion';

export default function Page() {

    let sections = new Section('The Kinematic of Rigid Body Motion');

    let introduction = sections.addSection('Introduction');

    introduction.setContent(<>
        <p> In this section, we will explore the kinematics of rigid body motion, focusing on the study of the motion of objects that maintain a constant shape. Several comprehensive treatises have been published on this topic;
            however, our goal is to delve deeper, and we will take the time to derive each equation meticulously, even at the risk of appearing pedantic, to ensure clarity in every notation.</p>

        <p>We will cover the following topics:</p>
        <ul>
            <li> <strong>Basic Properties of Orthogonal Transformations:</strong> We will outline some fundamental properties of orthogonal transformations within a vector space {mt("\\vb V")} of dimension {mt("n")}, which is endowed with a positively defined scalar product.
                This will include a discussion on how these transformations preserve lengths and angles between vectors, a key aspect of their role in rigid body motion. </li>
            <li> <strong>Rotations in Three Dimensions:</strong> We will then delve into the significant case of rotations in three-dimensional space. Here, we will explore how rotational matrices are
                constructed and how they relate to the concept of angular velocity and rotation axes. </li>
            <li> <strong>Infinitesimal Rotations:</strong> From our understanding of three-dimensional rotations, we will introduce the concept of infinitesimal rotation.
                This involves small-angle approximations and the use of skew-symmetric matrices to represent these small rotations. We will discuss their properties and how they are used to derive the equations of rigid motion. </li>
            <li> <strong>Transformation of Vectors Between Reference Frames:</strong> Building upon infinitesimal rotations, we will derive the general formula for transforming vectors between fixed and rotating reference frames.
                This section will cover how vectors change when observed from different frames and the mathematical framework needed for these transformations. </li>
            <li> <strong>Coriolis and Centrifugal Forces:</strong> Finally, we will end with the derivation of the Coriolis and centrifugal forces. These fictitious forces arise due to the rotation of the reference
                frame and are crucial for understanding the dynamics in rotating systems, such as the Earth atmosphere and ocean currents. </li>
        </ul>

    </>);

    let orthogonal = sections.addSection('Orthogonal Transformations');
    orthogonal.setContent(<>

        In this section we will review some basic properties of orthogonal transformations in a vector space {mt("V")} on the complex numbers {mt("C")} of dimension {mt("n")}, which is endowed with a scalar product generalized for complex vectors:

        {eq("\\braket{\\vb x| \\vb y} = x_i \\overline y_i")}

        where {mt("\\vb x = (x_1, x_2, \\ldots, x_n)")} and {mt("\\vb y = (y_1, y_2, \\ldots, y_n)")} are complex vectors in {mt("V")}, and {mt("\\overline y")} denotes the complex conjugate of {mt("y")}. The scalar product is positively defined, which means that it satisfies the following properties:

        {eq(mtx("matrix", "\\braket{\\vb x| \\vb y} = \\overline{\\braket{\\vb y| \\vb x}}", "\\braket{\\vb x| \\vb x} \\geq 0", "\\braket{\\vb x| \\vb x} = 0 \\iff \\vb x = \\vb 0"))}

        We will review some basic properties of orthogonal transformations, and we will consider only orthogonal transformations with <strong> real numbers</strong> coefficients, as this is the physically meaningful case for rigid body motion,
        although we will keep the scalar product generalized for complex vectors.
        <List>
            <ListItem sx={{ marginBottom: 2 }}>
                <Box>
                    <strong>Definition</strong>: Orthogonal transformations are linear transformations that preserve the length of vectors, and play a crucial role in the theory of rigid body motion.
                    A linear transformation {mt("\\vb A")} of {mt("V")} onto itself,

                    {eq("{\\vb A}: V \\to V")}

                    is orthogonal if it preserves the length of a vector in both coordinate systems {mt("\\vb x")} and {mt("\\vb x'")} in {mt("V")},

                    {eq("\\braket{\\vb x'| \\vb x' \\rule{0pt}{3ex}} = \\braket{\\vb A \\vb x| \\vb A \\vb x \\rule{0pt}{3ex}} = \\braket{\\vb x| \\vb x \\rule{0pt}{3ex}}")}

                    for all {mt("\\vb x, \\vb x' \\in V")}.
                </Box>
            </ListItem>
            <ListItem sx={{ marginBottom: 2 }}>
                <Box>
                    <strong>Symmetry and Inverse:</strong> From the properties of matrices and scalar products, we can write the above equation as

                    {eq("\\braket{\\vb A \\vb x| \\vb A \\vb x \\rule{0pt}{3ex}}=\\braket{\\vb x| {\\vb A^\\top}  \\vb A \\vb x \\rule{0pt}{3ex}} = \\braket{\\vb x| \\vb x \\rule{0pt}{3ex}}")}

                    which results in,

                    {eq(mtx("matrix", " {\\vb A^\\top}  \\vb A  =  {\\vb A}  \\vb A^\\top = \\vb I  ", " {\\vb A^{-1}} = \\vb A^\\top"))}

                    where {mt("\\vb I")} is the identity matrix. The inverse of an orthogonal transformation is the transpose of the matrix itself. As a note: if the matrix  {mt("\\vb A")} had complex elements, then the transpose would be replaced by the conjugate transpose {mt("\\bar A^\\top")}
                    {eq("\\braket{\\vb A \\vb x| \\vb A \\vb x \\rule{0pt}{3ex}}=\\braket{\\vb x| { \\bar A^\\top}  \\vb {A} \\vb x \\rule{0pt}{3ex}} = \\braket{\\vb x| \\vb x \\rule{0pt}{3ex}}")}
                </Box>
            </ListItem>
            <ListItem sx={{ marginBottom: 2 }}>
                <Box>
                    <strong>Orthogonality of rows and columns</strong>: Considering the rows and columns vectors {mt("\\vb v_i")} and {mt("\\vb a_i")} forming the matrix {mt("\\vb A")}, we can write the above equation as

                    {eq(mtx("matrix", "\\braket{ \\vb v_i | \\vb v_j} = \\delta_{ij} ", " \\braket{ \\vb a_i | \\vb a_j} = \\delta_{ij} "))}

                    which is equivalent to requiring that the rows and the columns vectors are a set of orthonormal vectors. The vectors {mt("\\vb v_i")} represent the components of the unit vectors that define the
                    direction of the coordinate axes in the rotated system, relative to the unit vectors of the reference system.
                </Box>
            </ListItem>

            <ListItem sx={{ marginBottom: 2 }}>
                <Box>
                    <strong>Property of eigenvalues</strong>: The eigenvector {mt("\\vb v")} corresponding to the eigenvalue {mt("\\lambda")}, will preserve its length under the orthogonal transformation

                    {eq("\\braket{\\vb v | \\vb v } = \\braket{\\vb A \\vb v | \\vb A \\vb v }= \\lambda \\overline{\\lambda} \\braket{\\vb v | \\vb v } ")}

                    which implies that the eigenvalues are complex numbers on the complex unit circle of the form {mt("\\lambda = e^{i\\theta}")}, and they always come in pair, as  {mt("\\lambda = -e^{i\\theta}")} is an eigenvalue as well. If  {mt("n")} is even,
                    then one eigenvalue is either +1 or -1.
                </Box>
            </ListItem>
            <ListItem sx={{ marginBottom: 2 }}>
                <Box>
                    <strong>Property of eigenvectors</strong>: the eigenvectors {mt("\\vb v_1")} and {mt("\\vb v_2")} corresponding to different eigenvalues {mt("\\lambda_1")} and {mt("\\lambda_2")} are orthogonal to each other. The proof of this property is straightforward, as we can write

                    {eq("\\braket{\\vb v_1 | \\vb v_2 } = \\braket{\\vb A \\vb v_1 | \\vb A \\vb v_2 }= \\lambda_1 \\overline{\\lambda_2} \\braket{\\vb v_1 | \\vb v_2 } ")}

                    which can only be true if {mt("\\braket{\\vb v_1 | \\vb v_2 } = 0")} as the eigenvalues are complex numbers on the unit circle different from zero.
                </Box>
            </ListItem>
            <ListItem sx={{ marginBottom: 2 }}>
                <Box>
                    <strong>Property of determinant:</strong> From {mt("\\det(\\vb A)=\\det(\\vb A^\\top)")} it follows that,

                    {eq("\\det(\\vb A)^2 = 1")}

                    which implies that the determinant of an orthogonal matrix is either {mt("+1")} or {mt("-1")}. As we will see in the next section, the former corresponds to proper rotations, while the latter corresponds to improper rotations or reflections.
                </Box>
            </ListItem>
            <ListItem sx={{ marginBottom: 2 }}>
                <Box>

                    <strong>Interpretation of orthogonal transformation:</strong> It is important to note that an orthogonal transformation can be seen in either two ways,
                    <br /><br />
                    <ul>
                        <li> a  <b> passive</b> transformation, where the components of the <strong>same</strong> vector are expressed in different bases </li>
                        <li> an <b> active</b> transformation, where a vector is actively transformed into a <strong>new one</strong> in the same reference system.</li>
                    </ul>
                    <br />
                    We will observe that in three dimensions, these two interpretations result in rotations that can be either clockwise or counterclockwise around the rotation axis.
                </Box>
            </ListItem>
        </List>


    </>);

    let rotation = sections.addSection('Rotations in Three Dimensions');
    rotation.setContent(<>

        An orthogonal transformation in three dimension will have the eigenvalues +1 or -1, and {mt("\\lambda = e^{i\\theta}")} and {mt("\\lambda = e^{-i\\theta}")}.

        The eigenvectors corresponding to the eigenvalue +1  are the vectors that remain unchanged under the transformation, forming the rotation axis. 
        Conversely, the eigenvectors corresponding to the eigenvalue −1 are the vectors that are reflected under the transformation.

        In physics, we assume that an orthogonal transformation varies continuously with the parameter  {mt("\\theta")} the rotation angle. This angle typically depends on time and describes the evolution of the rotated reference system relative to the fixed axis.
        When the rotation angle is zero, the reference systems coincide, and the transformation is the identity. Since continuous transformations cannot reflect the rotation axis at any point in the dynamics,
        we focus on proper rotations where the eigenvalue corresponding to the rotation axis is +1, ensuring no reflections occur.
        <br /><br />
    </>);

    let rotationAxis = rotation.addSection('Rotation Around the Principal Axes (x,y, and z)');

    rotationAxis.setContent(<>

        <MediaAndText imageSrc='/img/rotated.jpg' imagePosition='right' imageSize={45} caption={<div>Fig 1: Rotation of an angle {mt("\\theta")} around the z axis.</div>}>

            Before deriving the general form of a rotation around any axis, we will consider the rotation around the z-axis (see Fig.2). The rotation matrix {mt("\\vb A_z(\\theta)")} in this case is given by,

            {eq("\\vb A_z(\\theta) = \\begin{pmatrix} \\cos \\theta &  \\sin \\theta & 0 \\\\ -\\sin \\theta & \\cos \\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}")}

            where {mt("\\theta")} is the rotation angle. The derivation of the matrix {mt("\\vb A_z(\\theta)")} is straightforward, as the row vectors are obviously the components of the unit vectors of the rotated system
            in the reference system. The matrix {mt("\\vb A_z(\\theta)")} is orthogonal, as it satisfies the properties of an orthogonal matrix, and it is easy to verify that the determinant is {mt("+1")}. It is important to emphasize that the matrix
            {mt("\\vb R_z(\\theta)")} represent a passive transformation, where the components of the same vector are expressed in different bases, and the rotated reference system is turned by an angle {mt("\\theta")}
            <b>counterclockwise</b> around the z-axis.
        </MediaAndText>

        When {mt("\\vb A_z(\\theta)")} is interpreted in an <b>active</b> case, the rotation will be <b>clockwise</b> around the z-axis. This can be readily verified by considering the effect of applying {mt("\\vb A_z(\\theta)")} to a vector
        {mt("\\vb v = (r\\cos \\phi, r\\sin \\phi, z)")},

        {eq("\\vb A_z(\\theta) \\vb v = \\begin{pmatrix} \\cos \\theta &  \\sin \\theta & 0 \\\\ -\\sin \\theta & \\cos \\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} r\\cos \\phi \\\\ r\\sin \\ \\phi \\\\ z \\end{pmatrix} = \\begin{pmatrix} r\\cos(\\phi-\\theta) \\\\ r\\sin(\\phi-\\theta) \\\\ z \\end{pmatrix}")}

        which corresponds to decreasing the polar angle {mt("\\phi")} by the angle {mt("\\theta")}.  If the active rotation in practical applications needs to be counterclockwise,  the angle {mt("\\theta")} must be negative.

        The rotation matrix around any of the other axis, x or y, can be easily derived following similar steps. The rotation matrix around the x-axis is given by,

        {eq("\\vb A_x(\\theta) = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos \\theta &  \\sin \\theta \\\\ 0 & -\\sin \\theta & \\cos \\theta \\end{pmatrix}")}

        and the one around the y-axis is given by,

        {eq("\\vb A_y(\\theta) = \\begin{pmatrix} \\cos \\theta & 0 & \\sin \\theta \\\\ 0 & 1 & 0 \\\\ -\\sin \\theta & 0 & \\cos \\theta \\end{pmatrix}")}

    </>);

    let rotationGeneral = rotation.addSection('Rotation Around a General Axis');

    rotationGeneral.setContent(<>

        <p>The formula for a change of coordinates as a result of a rotation around an arbitrary axis defined by the unit vector {mt("\\vb n = (n_x, n_y, n_z)")}, with {mt("\\braket{\\vb n | \\vb n} = 1")} and an angle {mt("\\theta")}, is called the Rodrigues formula.
            While there are numerous well-documented methods to derive this formula available in various resources, we will revisit the derivation process, explaining the steps in detail.</p>

        <p>Our goal is to find the components of the rotated unit vectors {mt("\\vb e'_i")} in the reference system {mt("\\vb e_i")} as a function of the components of the unit vector {mt("\\vb n")} and the angle {mt("\\theta")}.
            These components will form the <b>rows</b> of the matrix describing the change of coordinates. </p>

        A unit vector  {mt("\\vb e_i")} in the fixed reference system can be decomposed in the component {mt("\\vb e_i^{||}")} and {mt("\\vb e_i^{\\perp}")} respectively parallel and perpendicular to {mt("\\vb n")}

        {eq(mtx("align", "\\vb e_i = \\vb e_i^{||} + \\vb e_i^{\\perp} ", "\\vb e_i^{||} = \\braket{\\vb e_i | \\vb n } \\vb n ", "\\vb e_i^{\\perp} = \\vb e_i - \\vb e_i^{||} = \\vb e_i - \\braket{\\vb e_i  | \\vb n} \\vb n"))}

        The component {mt("\\vb e_i^{||}")} is parallel to the rotation axis, and it will not change under the rotation. The component {mt("\\vb e_i^{\\perp}")} is perpendicular to the rotation axis, and it will rotate by an angle {mt("\\theta")} around the axis {mt("\\vb n")},
        into a new vector  {mt("\\vb e_i^{'\\perp}")}. Considering the unit vectors along {mt("{\\vb n}\\times \\vb e_i^{\\perp} = {\\vb n}\\times \\vb e_i")},

        {eq("\\frac{ {\\vb n}\\times \\vb e_i^{\\perp}}{|{\\vb n}\\times \\vb e_i^{\\perp} |} = \\frac {{\\vb n}\\times \\vb e_i}{|{\\vb n}\\times \\vb e_i|}")}

        and {mt("\\vb  e_i^{\\perp}")},

        {eq("\\frac{\\vb  e_i^{\\perp}}{|\\vb  e_i^{\\perp}|} = \\frac{\\vb e_i - \\braket{\\vb e_i \\ |\\vb n } \\vb n}{\\sqrt{1-\\braket{\\vb e_i \\ |\\vb n }^2}}")}

        utilizing the rotation formula above around the axis z (in this case {mt("\\vb n")}) we can write the rotated vector as,

        {eq("\\vb e_i^{'\\perp} = \\left(\\cos \\theta \\frac{\\vb e_i -\\braket{\\vb e_i\\ |\\vb n }}{\\sqrt{1-\\braket{\\vb e_i\\ |\\vb n }^2}}  - \\sin \\theta \\frac{(\\vb n \\times \\vb e_i)}{|\\vb n \\times \\vb e_i|} \\right) \\sqrt{1-\\braket{\\vb e_i\\ |\\vb n }^2}")}

        as the norm of the vector {mt("\\vb e_i^{\\perp}")} remains constant. The vector {mt("\\vb n \\times \\vb e_i")} contains only the components of {mt("\\vb n ")} of index different from {mt("i")}, as it can be easily verified by the definition of the cross product,


        {eq("(\\vb n \\times \\vb e_i)_j = \\epsilon_{jkp} n_k (e_i)_p= \\epsilon_{jkp} n_k \\delta_{ip} = \\epsilon_{jki} n_k")}

        where {mt("\\epsilon_{ijk}")} is the Levi-Civita tensor. The norm of the vector {mt("\\vb n \\times \\vb e_i")} is given by,

        {eq(mtx("align", "|\\vb n \\times \\vb e_i| &= \\sqrt{ n_k^2 + n_p^2}, \\,\\,\\,\\,   k,p \\neq i", "&= \\sqrt{1 - \\braket{\\vb e_i\\ |\\vb n }^2}"))}

        The components of the rotated unit vectors {mt("\\vb e_i'")} with respect of the reference frame are then given by,

        {eq("\\vb e_i' = \\braket{\\vb e_i \\ |\\vb n } \\vb n + \\cos \\theta ( {\\vb e_i -\\braket{\\vb e_i\\ |\\vb n }})   + \\sin \\theta {(\\vb e_i\\times\\vb n  )}")}

        The matrix {mt("\\vb A(\\vb n, \\theta)")} which describes the transformation of a vector components with respect to a reference system rotated around an axis {mt("\\vb n ")}
        by an angle {mt("\\theta")}, is obtained by evaluating the above equation for each unit vector {mt("\\vb e_i")} in the reference system. The components of the vectors {mt("\\vb e'_i ")}
        with respect to  {mt("\\vb e_i")} are the rows of the matrix {mt("\\vb A(\\vb n, \\theta)")},

        {eq(
            "\\vb A(\\vb n, \\theta) =\\cos(\\theta)\\vb I +(1-\\cos(\\theta)) \\ket{\\vb n}\\bra{\\vb n} +\\sin(\\theta) \\,\\,(..)\\times \\vb n   ",
            "Rotation matrix around an arbitrary axis", pageName)}

        where {mt("(..)")} is the placeholder for a vector. The explicit matrix form of the equation above is,

        {eq("\\vb A(\\vb n, \\theta)  = \\begin{pmatrix} n_x^2(1-\\cos \\theta)+\\cos \\theta & n_x n_y(1-\\cos \\theta)+n_z \\sin \\theta & n_x n_z(1-\\cos \\theta)-n_y \\sin \\theta" +
            "\\\\ n_y n_x(1-\\cos \\theta)-n_z \\sin \\theta & n_y^2(1-\\cos \\theta)+\\cos \\theta & n_y n_z(1-\\cos \\theta)+n_x \\sin \\theta \\\\ n_z n_x(1-\\cos \\theta)" +
            "+n_y \\sin \\theta & n_z n_y(1-\\cos \\theta)-n_x \\sin \\theta & n_z^2(1-\\cos \\theta)+\\cos \\theta \\end{pmatrix}")}

        It is important to emphasize again that the above transformation represents a passive rotation, meaning that the components of the same vector are expressed in different bases.
        The same matrix, if interpreted as an active transformation, will rotate the vector around the axis {mt("\\vb n")} by an angle {mt("\\theta")} in the counterclockwise direction.


    </>);

    // Infinitesimal rotations
    let infinitesimal = sections.addSection('Infinitesimal Rotations');

    let infDefinition = infinitesimal.addSection('Definition');

    infDefinition.setContent(<>

        In the previous section, we demonstrated that a rotation in three dimensions can be uniquely identified by a unit vector {mt("\\vb n")} and an angle {mt("\\theta")}. It would seem natural to consider a weather the group of orthogonal matrices, referred to as {mt("SO(3)")}, is
        isomorphic to {mt("R^3")}. Let us postulate the creation of such a mapping {mt("f")}, such that,

        {eq("f: SO(3) \\to R^3")}

        For this mapping to be an isomorphism, it must be one-to-one (and surjective),

        {eq("\\forall \\,\\, \\vb R_1, \\vb R_2 \\in SO(3), \\quad f(\\vb R_1) = f(\\vb R_2) \\implies \\vb R_1 = \\vb R_2.")}

        Considering two rotations {mt("\\vb A \\in SO(3)")} and {mt("\\vb B \\in SO(3)")}, we know that rotations do not commute,

        {eq("\\vb A \\vb B \\neq \\vb B \\vb A")}

        However, their images under the mapping {mt("f")} are the same,

        {eq("f(\\vb A \\vb B) = f(\\vb A) + f(\\vb B) = f(\\vb B) + f(\\vb A) = f(\\vb B \\vb A)")}

        due to the commutativity of the vector space {mt("R^3")}. Thus, it is evident that such a mapping cannot be one-to-one, and the group {mt("SO(3)")} is not isomorphic to {mt("R^3")}.

        Finite rotations cannot therefore uniquely identified by a vector in {mt("R^3")}, and we must consider a different approach. We will now introduce the concept of infinitesimal rotations, which are rotations that do commute.

        <br /><br />

        Let us consider two rotation matrices {mt("\\vb A")} and {mt("\\vb B")} such that,

        {eq(mtx("align", "\\vb A = \\vb I + \\epsilon_1", "\\vb B = \\vb I + \\epsilon_2"))}

        where {mt("\\epsilon_1")} and {mt("\\epsilon_2")} are infinitesimal matrices such that {mt("\\epsilon_1 \\epsilon_2 = \\epsilon_2 \\epsilon_1 \\approx 0")}. The product of {mt("\\vb A ")} and {mt("\\vb B")} is,

        {eq("\\vb A \\vb B = (\\vb I + \\epsilon_1)(\\vb I + \\epsilon_2) = \\vb I + \\epsilon_1 + \\epsilon_2 + \\epsilon_1 \\epsilon_2 = \\vb I + \\epsilon_1 + \\epsilon_2")}

        which is the same as the product of {mt("\\vb B")} and {mt("\\vb A")}. Hence, for so called infinitesimal rotations, the commutativity property holds.

        <br /><br />

        For a general infinitesimal rotation {mt("\\vb A = \\vb I + \\epsilon")}, the unitary condition {mt("\\vb A^\\dagger \\vb A = \\vb I")} implies that the matrix {mt("\\epsilon")} is skew-symmetric, as it satisfies the property

        {eq("\\epsilon^\\top = -\\epsilon.")}

        A skew-symmetric matrix has zero diagonal elements, and the off-diagonal elements satisfy the property {mt("\\epsilon_{ij} = -\\epsilon_{ji}")}, and assumes the general form,

        {eq("\\epsilon = \\begin{pmatrix} 0 & d\\Omega_3 & -d\\Omega_2 \\\\ -d\\Omega_3 & 0 & d\\Omega_1 \\\\ d\\Omega_2 & -d\\Omega_1 & 0 \\end{pmatrix}")}

        A change of coordinates of a vector {mt("\\vb r")} under an infinitesimal rotation {mt("\\vb A = \\vb I + \\epsilon")} is given by,

        {eq("\\vb r' = \\vb A \\vb r = (\\vb I + \\epsilon) \\vb r = \\vb r + \\epsilon \\vb r = \\vb r + \\vb r \\times \\boldsymbol d\\Omega ")}

        as it can be readily verified that,

        {eq("\\epsilon \\vb r = \\begin{pmatrix} 0 & d\\Omega_3 & -d\\Omega_2 \\\\ -d\\Omega_3 & 0 & d\\Omega_1 \\\\ d\\Omega_2 & -d\\Omega_1 & 0 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = \\begin{pmatrix} d\\Omega_3 y - d\\Omega_2 z \\\\ -d\\Omega_3 x + d\\Omega_1 z \\\\ d\\Omega_2 x - d\\Omega_1 y \\end{pmatrix} = \\vb r \\times d\\boldsymbol \\Omega .")}

        where {mt("\\vb r= (x,y,z)")} and {mt("\\boldsymbol \\Omega = (d\\Omega_1, d\\Omega_2, d\\Omega_3)")}.

        <br /><br />

        As two infinitesimal rotations commute, the mapping {mt("f")} from the group of infinitesimal rotations to {mt("R^3")} is one-to-one and surjective, and we can therefore uniquely identify a rotation by the vector {mt("\\boldsymbol \\Omega")}.

        <br /><br />

        We now evaluate the form of the matrix {ref('Rotation matrix around an arbitrary axis', pageName)} for a value of the angle {mt("\\theta")} that is infinitesimally small. We find that the matrix is given by,

        {eq("\\vb R(\\vb n, d\\theta)= \\vb I + d\\theta \\begin{pmatrix} 0 & n_3 & -n_y \\\\ -n_z & 0 & n_x \\\\ n_y & -n_x & 0 \\end{pmatrix} ")}

        This allows us to identify,

        {eq("\\epsilon = d\\theta \\begin{pmatrix} 0 & n_3 & -n_y \\\\ -n_z & 0 & n_x \\\\ n_y & -n_x & 0 \\end{pmatrix}")}

        as the infinitesimal rotation matrix, and the vector

        {eq("\\boldsymbol \\Omega = d\\theta (n_x, n_y, n_z)")}

        as the vector defining the infinitesimal rotation.

    </>);

    let similarity = infinitesimal.addSection('Similarity Transformation of Infinitesimal Rotations');

    similarity.setContent(<>


        In the previous section, we have shown that an infinitesimal rotation can be represented by a vector {mt("\\boldsymbol \\Omega = (d\\Omega_1, d\\Omega_2, d\\Omega_3)")}.
        We will now show that {mt("\\boldsymbol \\Omega")} transforms as a regular {mt("R^3")} vector under a similarity transformation.
        <br /><br />

        Let us consider a rotation matrix {mt("\\vb A = \\vb I + \\epsilon")}, where {mt("\\epsilon")} is a skew-symmetric matrix of the form,

        {eq("\\epsilon = \\begin{pmatrix} 0 & d\\Omega_3 & -d\\Omega_2 \\\\ -d\\Omega_3 & 0 & d\\Omega_1 \\\\ d\\Omega_2 & -d\\Omega_1 & 0 \\end{pmatrix}")}

        The representation of  {mt("\\vb A")} in the coordinate system defined by an orthogonal transformation {mt("\\vb B")}, is   {mt("\\vb A' = \\vb B \\vb A \\vb B^\\top")} and it has the form,

        {eq("\\vb A' = \\vb B (\\vb I + \\epsilon) \\vb B^\\top = \\vb B \\vb B^\\top + \\vb B \\epsilon \\vb B^\\top = \\vb I + \\vb B \\epsilon \\vb B^\\top = I + \\epsilon'")}

        The matrix {mt("\\epsilon' = \\vb B \\epsilon \\vb B^\\top")} is skew-symmetric, as it can be readily verified that,

        {eq("(\\epsilon')^\\top = (\\vb B \\epsilon \\vb B^\\top)^\\top = \\vb B \\epsilon^\\top \\vb B^\\top = -\\vb B \\epsilon \\vb B^\\top = -\\epsilon'")}

        Given that the matrix {mt("\\bf B")} is orthogonal, there exist three orthogonal unit vectors {mt("\\bf v_1")}, {mt("\\bf v_2")}, and {mt("\\bf v_3")}:

        {eq(mtx("align", "{\\bf v}_i \\cdot {\\bf v}_j = \\delta_{ij}"))}

        which define a reference system in the rotated coordinates.

        The matrix {mt("\\bf B")} can be written as:

        {eq("\\bf B=\\begin{pmatrix} {\\bf v}_1 \\\\ {\\bf v}_2 \\\\ {\\bf v}_3 \\end{pmatrix}")}

        where the vectors {mt("\\bf v_i")} are row vectors. The transpose of {mt("\\bf B")} is readily obtained as:

        {eq("{\\bf B}^{\\top}=\\left[ {\\bf v}_1^\\top , {\\bf v}_2^\\top , {\\bf v}_3^\\top \\right]")}

        where the vectors {mt("{\\bf v}_i")} are now the columns of {mt("\\bf B^\\top")}.

        The product of {mt("\\bf \\boldsymbol\\epsilon B^\\top")} is the matrix with columns:

        {eq("{\\bf \\boldsymbol \\epsilon B^{\\top}} = \\left[{\\bf v}_1 \\times d\\boldsymbol \\Omega , {\\bf v}_2 \\times d\\boldsymbol \\Omega , {\\bf v}_3 \\times d\\boldsymbol \\Omega\\right]")}

        and, for illustration, the matrix {mt("\\bf \\boldsymbol B\\boldsymbol \\epsilon B^\\top")} is explicitly written below:

        {eq("\\bf B\\boldsymbol \\epsilon B^\\top=\\begin{pmatrix} {\\bf v}_1\\cdot({\\bf v}_1\\times d\\boldsymbol \\Omega) & {\\bf v}_1\\cdot({\\bf v}_2\\times d\\boldsymbol \\Omega) &{\\bf v}_1\\cdot({\\bf v}_3\\times d\\boldsymbol \\Omega) \\\\"
            + " {\\bf v}_2\\cdot({\\bf v}_1\\times d\\boldsymbol \\Omega) & {\\bf v}_2\\cdot({\\bf v}_2\\times d\\boldsymbol \\Omega) &{\\bf v}_2\\cdot({\\bf v}_3\\times d\\boldsymbol \\Omega) \\\\" +
            " {\\bf v}_3\\cdot({\\bf v}_1\\times d\\boldsymbol \\Omega) & {\\bf v}_3\\cdot({\\bf v}_2\\times d\\boldsymbol \\Omega) &{\\bf v}_3\\cdot({\\bf v}_3\\times d\\boldsymbol \\Omega) \\end{pmatrix}")}

        The antisymmetry of the matrix is evident as the diagonal elements are zero:

        {eq("{\\bf v}_i\\cdot({\\bf v}_i\\times d\\boldsymbol \\Omega) =0")}

        and the off-diagonal elements are opposite because of the properties of the scalar triple product:

        {eq("{\\bf v}_i\\cdot({\\bf v}_j\\times d\\boldsymbol \\Omega) = - {\\bf v}_j\\cdot({\\bf v}_i\\times d\\boldsymbol \\Omega)")}

        The components of {mt("d\\boldsymbol \\Omega'")} are by definition:

        {eq(mtx("align", "d\\Omega'_1 &= {\\bf v}_2\\cdot({\\bf v}_3\\times d\\boldsymbol \\Omega) = d\\boldsymbol \\Omega\\cdot({\\bf v}_2\\times {\\bf v}_3) ",
            "d\\Omega'_2 &= {\\bf v}_3\\cdot({\\bf v}_1\\times d\\boldsymbol \\Omega) = d\\boldsymbol \\Omega\\cdot({\\bf v}_3\\times {\\bf v}_1) ",
            "d\\Omega'_3 &= {\\bf v}_1\\cdot({\\bf v}_2\\times d\\boldsymbol \\Omega) = d\\boldsymbol \\Omega\\cdot({\\bf v}_1\\times {\\bf v}_2) "))}

        As the determinant of {mt("\\bf B")} assumes the values {mt("\\pm 1")}:

        {eq("|{\\bf B}| = {\\bf v}_1\\cdot ({\\bf v}_2\\times {\\bf v}_3) = \\pm 1")}

        depending on the orientation of the vectors {mt("{\\bf v}_i")} in the rotated coordinate system, the equation becomes:

        {eq(mtx("align", "d\\Omega'_1 &= |{\\bf B}|\\, d\\boldsymbol\\Omega\\cdot{\\bf v}_1 ",
            "d\\Omega'_2 &= |{\\bf B}|\\, d\\boldsymbol\\Omega\\cdot{\\bf v}_2 ",
            "d\\Omega'_3 &= |{\\bf B}|\\, d\\boldsymbol\\Omega\\cdot{\\bf v}_3 "))}

        where we have made use of the property of the scalar triple product, or equivalently,

        {eq("d\\boldsymbol\\Omega' = |{\\bf B}| \\,\\,{\\bf B}\\, d\\boldsymbol\\Omega.")}

        The vector {mt("d\\boldsymbol \\Omega'")} transforms as a regular vector under a similarity transformation, provided the orientation of the axis is preserved, and it is therefore a vector in {mt("R^3")}.

    </>);

    let rateOfChange = sections.addSection('Rate of Change of a Vector');

    rateOfChange.setContent(<>

        <p>In this section, we will examine how the coordinates of a given vector change over time in two different reference systems: one that is fixed and another that rotates with respect to the fixed one.
            While there are numerous resources available that address this topic, we believe it is essential to derive the fundamental equation for the rate of change in a detailed manner.
            This will ensure that it is clear which components are being referenced in the general equation of motion. </p>
        <p>
            To understand this better, consider a vector in a fixed reference frame and how its components might appear different in a rotating frame.
            The rotating frame itself can change its orientation with time, adding complexity to the motion of the vector. By carefully deriving the equations,
            we can delineate the contributions from both the intrinsic change of the vector and the effect of the rotating frame.

            We will start by defining the vector in the fixed frame and introduce the rotational matrix that relates the rotating frame to the fixed frame. We will then derive the time derivative of the vector
            in both frames and show how they are connected. This detailed derivation is crucial for a comprehensive understanding of the dynamics involved, especially in applications such as classical mechanics,
            gyroscopic motion, and the study of rotating systems in physics and engineering.

            By the end of this section, the reader will have a clear understanding of the rate of change of a vector in both fixed and rotating reference frames,
            and will be well-equipped to apply these principles to a wide range of physical problems.</p>

        Lets consider a time-dependent vector {mt("\\vb g= \\vb g(t)")} in a fixed reference frame, and its components in a rotating frame {mt("\\vb g'=g'(t)")}.  We will assume that the
        components in the two different reference systems change as per a rotation matrix {mt("\\vb A(t)")}, which is also time-dependent:

        {eq("\\vb g'(t) = \\vb A(t) \\vb g(t) ")}


        The time derivative of the vector in the rotating frame is given by,

        {eq("\\frac{d\\vb g'(t)}{dt} = \\frac{d\\vb A(t)}{dt} \\vb g(t) + \\vb A(t) \\frac{d\\vb g(t)}{dt} ")}

        and the time derivative of the matrix {mt("\\vb A(t)")} at time {mt("t_0")} is formally defined as,

        {eq("\\frac{d\\vb A(t)}{dt} = \\lim_{\\Delta t \\to 0} \\frac{\\vb A(t+\\Delta t) - \\vb A(t)}{\\Delta t}.")}

        To compute the derivative above, we need to understand how the operator {mt("\\vb A(t+\\Delta t)")}. The operator {mt("\\vb A(t)")} changes the coordinates of a generic vector
        in the fixed frame to the rotating frame at time {mt("t")}, while the operator {mt("\\vb A(t+\\Delta t)")} takes these transformed coordinates and rotates them further by a small amount proportional to the time increment {mt("\\Delta t")}.
        Therefore, the operator {mt("\\vb A(t+\\Delta t)")} is the composition of two rotations: one from the fixed frame to the rotating frame at time {mt("t")},
        and the other being the infinitesimal rotation from the rotating frame at time {mt("t+dt")}.

        {eq("\\vb A(t+\\Delta t) = (\\vb I +  \\epsilon)  \\vb A(t)")}

        and the derivative of the operator {mt("\\vb A(t)")} is then given by,

        {eq("\\frac{d\\vb A(t)}{dt} = \\lim_{\\Delta t \\to 0} \\frac{(\\vb I +  \\epsilon)  \\vb A(t) - \\vb A(t)}{\\Delta t} = \\lim_{\\Delta t \\to 0} \\frac{\\epsilon}{\\Delta t} \\vb A(t)= \\vb A(t) (..) \\times\\lim_{\\Delta t \\to 0} \\frac{d\\boldsymbol \\Omega}{\\Delta t}= " +
            "\\vb A(t)(..)\\times \\boldsymbol \\omega")}

        where,

        {eq("\\boldsymbol \\omega = \\lim_{\\Delta t \\to 0} \\frac{d\\boldsymbol\\Omega}{\\Delta t}")}

        and {mt("(..)")} denotes the placeholder for a vector, {mt("\\boldsymbol \\omega")} is the <b>angular velocity</b>. From the above equation, we can see that the vector {mt("\\boldsymbol \\omega")} is defined in the rotated coordinate system,
        as the operator {mt("\\vb A(t)")} transforms a vector from the fixed frame to the rotating frame, and then the operator {mt("\\epsilon")} is applied.
        We will later explore how its components are defined accordingly. The final formula for the rate of change of the vector in the rotating frame is then given by the following equivalent equations:

        {eq(mtx('align', "\\frac{d\\vb g'(t)}{dt} &= \\left(\\vb A(t)\\, \\vb g(t)\\right) \\times  \\boldsymbol \\omega + \\vb A(t) \\frac{d\\vb g(t)}{dt}",
            "  &= \\vb g'(t) \\times  \\boldsymbol \\omega + \\vb A(t) \\frac{d\\vb g(t)}{dt}",
            "  &=\\vb A(t)\\,  \\left( \\vb g(t)\\times ( \\vb A(t)^\\top \\boldsymbol \\omega) +   \\frac{d\\vb g(t)}{dt}\\right) "
        ), "rate of change: direct", pageName)}

        where in the last equation, the distributive property of matrix multiplication for orthogonal matrices regarding the cross product has been utilized. It is important to emphasize that no ambiguity exists in the above equation regarding which components belong to which reference system. The components of the vector {mt("\\vb g(t)")}
        are expressed in the fixed reference system and are properly transformed into the rotating system through the action of {mt("\\vb A(t)")}, ensuring compatibility with {mt("\\vb g'(t)")}.
        This transformation guarantees that the relationship between the two systems is clearly defined and preserves the integrity of the vector representation in both frames.

        <br /><br />

        A similar formula can be derived for the rate of change of the vector in the fixed frame, as

        {eq("\\vb g(t) = \\vb A^\\top(t) \\vb g'(t) ")}

        Multiplying {ref('rate of change: direct', pageName)} by {mt("\\vb A^\\top(t)")} from the left, we obtain,

        {eq(mtx('align',
            " \\frac{d\\vb g(t)}{dt} &=     (\\vb A^\\top(t)  \\boldsymbol \\omega ) \\times \\vb g(t)  +\\vb A^\\top(t) \\frac{d\\vb g'(t)}{dt} ",

            "  & =     \\vb A^\\top(t) \\left( \\boldsymbol \\omega  \\times \\vb g'(t)  +  \\frac{d\\vb g'(t)}{dt}\\right) "
        ),
            "rate of change: inverse", pageName
        )}


    </>);

    let poisson = rateOfChange.addSection('Poisson Formulas');

    poisson.setContent(<>

        Let us consider a set of fixed unitary vectors the rotating frame {mt("\\vb e'_i")} and their corresponding vectors {mt("\\vb e_i")} iin the fixed frame. From equation {ref('rate of change: direct', pageName)} we have,

        {eq("0= \\vb e'_i \\times \\boldsymbol \\omega + \\vb A \\frac{d\\vb e_i}{dt}")}

        which gives immediately the Poisson formula,

        {eq("   \\frac{d\\vb e'_i}{dt} = \\boldsymbol \\omega \\times \\vb e'_i ")}

        where,

        {eq("  \\frac{d\\vb e'_i}{dt} =\\vb A \\frac{d\\vb e_i}{dt}")}


    </>);

    let omega = rateOfChange.addSection("Components of the angular velocity");

    omega.setContent(<>

        Let us consider the Poisson formula for the unitary vector {mt("\\vb e'_1")},

        {eq("\\boldsymbol \\omega \\times \\vb e'_1 = \\frac{d\\vb e'_1}{dt}  ")}

        performing the scalar product on  both sides by {mt("\\vb e'_2")} from the left, we obtain the component of the angular velocity along the {mt("\\vb e'_3")} vector,

        {eq(mtx('align',
            "\\vb e'_2 \\cdot (\\boldsymbol \\omega \\times \\vb e'_1) &= \\vb e'_2 \\cdot \\frac{d\\vb e'_1}{dt}  ",
            "\\boldsymbol \\omega \\cdot (\\vb e'_1 \\times \\vb e'_2) &= \\vb e'_2 \\cdot \\frac{d\\vb e'_1}{dt}  ",
            "\\boldsymbol \\omega \\cdot \\vb e'_3 &= \\vb e'_2 \\cdot \\frac{d\\vb e'_1}{dt}  "
        ))}

        Similar formulas can be derived for the other components of the angular velocity, and we ultimately obtain the components of the angular velocity as,

        {eq(mtx('align',
            "\\omega_1 &= \\vb e'_2 \\cdot \\frac{d\\vb e'_3}{dt}  ",
            "\\omega_2 &= \\vb e'_3 \\cdot \\frac{d\\vb e'_1}{dt}  ",
            "\\omega_3 &= \\vb e'_1 \\cdot \\frac{d\\vb e'_2}{dt}  "
        ))}

        and in vector form,

        {eq("\\boldsymbol \\omega = \\left(\\vb e'_2 \\cdot \\frac{d\\vb e'_3}{dt}\\right) \\vb e'_1 + \\left(\\vb e'_3 \\cdot \\frac{d\\vb e'_1}{dt}\\right) \\vb e'_2 + \\left(\\vb e'_1 \\cdot \\frac{d\\vb e'_2}{dt}\\right) \\vb e'_3",
            "Components of the angular velocity", pageName)}

    </>);

    let examplesAngularVelocity = sections.addSection('Relevant Examples of Angular Velocity');

    examplesAngularVelocity.setContent(<>

        In this section, we will present several examples of angular velocity in a rotating system. We will start with the simple scenario of a rigid body rotating around a fixed axis.
        Following that, we will examine the rotation of a system around an axis that changes its orientation over time.

    </>);

    let fixedAxis = examplesAngularVelocity.addSection('Rotation around a Fixed Axis');

    fixedAxis.setContent(<>

        In this section, we will assume that a rigid body is rotating around a fixed axis {mt("\\vb n")} by an angle {mt("\\theta= \\theta(t)")}.
        The time derivative of the rotation matrix {mt("\\vb A(\\vb n,\\theta(t))")} from {ref('Rotation matrix around an arbitrary axis', pageName)} is given by:

        {eq("\\frac{d\\vb A(\\vb n,\\theta(t))}{dt} = (-\\sin(\\theta) \\vb I + \\sin(\\theta) \\ket{\\vb n}\\bra{\\vb n} + \\cos(\\theta) \\,\\,(..)\\times \\vb n )\\dot\\theta ")}

        It can be readily verified that:

        {eq("\\frac{d\\vb A(\\vb n,\\theta(t))}{dt} = (\\vb A(\\vb n,\\theta(t)) (..)) \\times \\boldsymbol \\omega")}

        where the angular velocity in the rotating frame is given by:

        {eq("\\boldsymbol \\omega = \\dot\\theta \\vb n.", "Angular velocity with a fixed axis", pageName)}

        It is straightforward to verify that the components of the angular velocity in the fixed frame are the same as those in the rotating frame, as {mt("\\vb A(\\vb n,\\theta(t)) \\vb n=\\vb n.")}
    </>);

    let rotatingAxis = examplesAngularVelocity.addSection('Rotation around a Rotating Axis');

    rotatingAxis.setContent(<>

        The formula for the angular velocity when the axis of rotation is also changing in time can be derived following the same steps as in the previous example.
        The calculations are intensive, so we present the final result for the angular velocity in the rotating frame:

        {eq("\\boldsymbol \\omega = (1-\\cos(\\theta)) \\,\\,\\dot{\\vb n}\\times\\vb n + \\sin(\\theta)\\dot{\\vb n} + \\dot\\theta\\vb n", "Angular velocity with rotating axis", pageName)}

        The formula above can be verified using symbolic computation software. It is recommended to express {mt(" {\\vb n}")} in polar coordinates to 
        automatically satisfy the orthogonality condition {mt(" {\\vb n}\\cdot \\dot{\\vb n}=0")} and ensure the preservation of the modulus of the vector {mt(" {\\vb n}")}.

    </>);


    let sectionsToRender: SectionType = sections.getSections();

    return (
        <>
            <SectionsMenusLayout mainSection={sectionsToRender} />
        </>
    );

}



{/* 


        <p>In the previous section we have shown that an infinitesimal rotation can be represented by a vector {mt("\\boldsymbol \\Omega = (d\\Omega_1, d\\Omega_2, d\\Omega_3)")}. We will now show that {mt("\\boldsymbol \\Omega")} transforms
            as a regular {mt("R^3")} vector under a similarity transformation.</p>

        Let us consider a rotation matrix {mt("\\vb A = \\vb I + \\epsilon")}, where {mt("\\epsilon")} is a skew-symmetric matrix of the form,

        {eq("\\epsilon = \\begin{pmatrix} 0 & d\\Omega_3 & -d\\Omega_2 \\\\ -d\\Omega_3 & 0 & d\\Omega_1 \\\\ d\\Omega_2 & -d\\Omega_1 & 0 \\end{pmatrix}")}

        and an orthogonal transformation {mt("\\vb B")}. The transformed matrix {mt("\\vb A' = \\vb B \\vb A \\vb B^\\top")} has the form,

        {eq("\\vb A' = \\vb B (\\vb I + \\epsilon) \\vb B^\\top = \\vb B \\vb B^\\top + \\vb B \\epsilon \\vb B^\\top = \\vb I + \\vb B \\epsilon \\vb B^\\top = I + \\epsilon'")}

        where the matrix {mt("\\epsilon' = \\vb B \\epsilon \\vb B^\\top")} is also skew-symmetric, as it can be readily verified that,

        {eq("(\\epsilon')^\\top = (\\vb B \\epsilon \\vb B^\\top)^\\top = \\vb B \\epsilon^\\top \\vb B^\\top = -\\vb B \\epsilon \\vb B^\\top = -\\epsilon'")}



        Given that the matrix {mt("{\\bf B}")} is orthogonal, there exist three orthogonal unit vectors {mt("\\bf v_1")}, {mt("\\bf v_2")}, and {mt("\\bf v_3")}:

        {eq(mtx("align", "{\\bf v}_i \\cdot {\\bf v}_j = \\delta_{ij}  "))}

        which define a reference system in the rotated coordinates.

        The matrix {mt("\\bf B")} can be written as:

        {eq("\\bf B=\\begin{pmatrix} {\\bf v}_1 \\\\ {\\bf v}_2 \\\\ {\\bf v}_3 \\end{pmatrix}")}

        where the vectors {mt("\\bf v_i")} are row vectors. The transpose of {mt("\\bf B")} is readily obtained as:

        {eq("{\\bf B}^{\\top}=\\left[ {\\bf v}_1^\\top , {\\bf v}_2^\\top , {\\bf v}_3^\\top \\right]")}

        where the vectors {mt("{\\bf v}_i")} are now the columns of {mt("\\bf B^\\top")}.

        The product of {mt("\\bf \\boldsymbol\\epsilon B^\\top")} is the matrix with columns:

        {eq("{\\bf \\boldsymbol \\epsilon B^{\\top}} = \\left[{\\bf v}_1 \\times d\\boldsymbol \\Omega {\\bf v}_2 \\times d\\boldsymbol \\Omega {\\bf v}_3 \\times d\\boldsymbol \\Omega\\right]")}


        and, for illustration, the matrix {mt("\\bf \\boldsymbol B\\boldsymbol \\epsilon B^\\top")} is explicitly written below:

        {eq("\\bf B\\boldsymbol \\epsilon B^\\top=\\begin{pmatrix} {\\bf v}_1\\cdot({\\bf v}_1\\times d\\boldsymbol \\Omega) & {\\bf v}_1\\cdot({\\bf v}_2\\times d\\boldsymbol \\Omega) &{\\bf v}_1\\cdot({\\bf v}_3\\times d\\boldsymbol \\Omega) \\\\"
            + " {\\bf v}_2\\cdot({\\bf v}_1\\times d\\boldsymbol \\Omega) & {\\bf v}_2\\cdot({\\bf v}_2\\times d\\boldsymbol \\Omega) &{\\bf v}_2\\cdot({\\bf v}_3\\times d\\boldsymbol \\Omega) \\\\" +
            " {\\bf v}_3\\cdot({\\bf v}_1\\times d\\boldsymbol \\Omega) & {\\bf v}_3\\cdot({\\bf v}_2\\times d\\boldsymbol \\Omega) &{\\bf v}_3\\cdot({\\bf v}_3\\times d\\boldsymbol \\Omega) \\end{pmatrix}")}

        The antisymmetry of the matrix is evident as the diagonal elements are zero:

        {eq("{\\bf v}_i\\cdot({\\bf v}_i\\times d\\boldsymbol \\Omega) =0")}

        and the off-diagonal elements are opposite because of the properties of the scalar triple product:

        {eq(" {\\bf v}_i\\cdot({\\bf v}_j\\times d\\boldsymbol \\Omega) = - {\\bf v}_j\\cdot({\\bf v}_i\\times d\\boldsymbol \\Omega) ")}

        The components of {mt("d\\boldsymbol \\Omega'")} are by definition:

        {eq(mtx("align", "d\\Omega'_1 &= {\\bf v}_2\\cdot({\\bf v}_3\\times d\\boldsymbol \\Omega) = d\\boldsymbol \\Omega\\cdot({\\bf v}_2\\times {\\bf v}_3) ",
            "d\\Omega'_2 &= {\\bf v}_3\\cdot({\\bf v}_1\\times d\\boldsymbol \\Omega) = d\\boldsymbol \\Omega\\cdot({\\bf v}_3\\times {\\bf v}_1) ",
            "d\\Omega'_3 &= {\\bf v}_1\\cdot({\\bf v}_2\\times d\\boldsymbol \\Omega) = d\\boldsymbol \\Omega\\cdot({\\bf v}_1\\times {\\bf v}_2) "))}

        As the determinant of {mt("\\bf B")} assumes the values {mt("\\pm 1")}:

        {eq(" |{\\bf B}| = {\\bf v}_1\\cdot ({\\bf v}_2\\times {\\bf v}_3) = \\pm 1")}

        depending on the orientation of the vectors {mt("{\\bf v}_i")} in the rotated coordinate system, equation (1) becomes:

        {eq(mtx("align", "d\\Omega'_1 &= |{\\bf B}|\\, d\\boldsymbol\\Omega\\cdot{\\bf v}_1 ",
            "d\\Omega'_2 &= |{\\bf B}|\\, d\\boldsymbol\\Omega\\cdot{\\bf v}_2 ",
            "d\\Omega'_3 &= |{\\bf B}|\\, d\\boldsymbol\\Omega\\cdot{\\bf v}_3 "))}

        or equivalently,

        {eq("d\\boldsymbol\\Omega' = |{\\bf B}| \\,\,{\\bf B}\\, d\\boldsymbol\\Omega.")} */}