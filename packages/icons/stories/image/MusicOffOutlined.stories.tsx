import type { Meta, StoryObj } from '@storybook/react';

import MusicOffOutlined from '../../lib/image/MusicOffOutlined';

const meta: Meta<typeof MusicOffOutlined> = {
  component: MusicOffOutlined,
  tags: ['autodocs'],
  title: 'image/MusicOffOutlined',
};

export default meta;
type Story = StoryObj<typeof MusicOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
