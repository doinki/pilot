import type { Meta, StoryObj } from '@storybook/react';

import SixteenMpOutlined from '../../lib/image/SixteenMpOutlined';

const meta: Meta<typeof SixteenMpOutlined> = {
  component: SixteenMpOutlined,
  tags: ['autodocs'],
  title: 'image/SixteenMpOutlined',
};

export default meta;
type Story = StoryObj<typeof SixteenMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
