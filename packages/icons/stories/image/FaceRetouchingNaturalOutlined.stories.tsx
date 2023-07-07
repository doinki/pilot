import type { Meta, StoryObj } from '@storybook/react';

import FaceRetouchingNaturalOutlined from '../../lib/image/FaceRetouchingNaturalOutlined';

const meta: Meta<typeof FaceRetouchingNaturalOutlined> = {
  component: FaceRetouchingNaturalOutlined,
  tags: ['autodocs'],
  title: 'image/FaceRetouchingNaturalOutlined',
};

export default meta;
type Story = StoryObj<typeof FaceRetouchingNaturalOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
