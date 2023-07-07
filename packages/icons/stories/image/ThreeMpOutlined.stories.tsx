import type { Meta, StoryObj } from '@storybook/react';

import ThreeMpOutlined from '../../lib/image/ThreeMpOutlined';

const meta: Meta<typeof ThreeMpOutlined> = {
  component: ThreeMpOutlined,
  tags: ['autodocs'],
  title: 'image/ThreeMpOutlined',
};

export default meta;
type Story = StoryObj<typeof ThreeMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
