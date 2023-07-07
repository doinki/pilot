import type { Meta, StoryObj } from '@storybook/react';

import WavesOutlined from '../../lib/content/WavesOutlined';

const meta: Meta<typeof WavesOutlined> = {
  component: WavesOutlined,
  tags: ['autodocs'],
  title: 'content/WavesOutlined',
};

export default meta;
type Story = StoryObj<typeof WavesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
