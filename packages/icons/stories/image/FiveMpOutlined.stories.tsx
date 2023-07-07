import type { Meta, StoryObj } from '@storybook/react';

import FiveMpOutlined from '../../lib/image/FiveMpOutlined';

const meta: Meta<typeof FiveMpOutlined> = {
  component: FiveMpOutlined,
  tags: ['autodocs'],
  title: 'image/FiveMpOutlined',
};

export default meta;
type Story = StoryObj<typeof FiveMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
