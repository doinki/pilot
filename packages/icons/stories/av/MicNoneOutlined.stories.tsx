import type { Meta, StoryObj } from '@storybook/react';

import MicNoneOutlined from '../../lib/av/MicNoneOutlined';

const meta: Meta<typeof MicNoneOutlined> = {
  component: MicNoneOutlined,
  tags: ['autodocs'],
  title: 'av/MicNoneOutlined',
};

export default meta;
type Story = StoryObj<typeof MicNoneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
