#version 300 es
in vec3 aVertexPosition;

void main(void)
{
    gl_Position = vec4(aVertexPosition, 1.0);
}
