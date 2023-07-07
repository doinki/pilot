import type { Meta, StoryObj } from '@storybook/react';

import GrainOutlined from '../../lib/image/GrainOutlined';

const meta: Meta<typeof GrainOutlined> = {
  component: GrainOutlined,
  tags: ['autodocs'],
  title: 'image/GrainOutlined',
};

export default meta;
type Story = StoryObj<typeof GrainOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
