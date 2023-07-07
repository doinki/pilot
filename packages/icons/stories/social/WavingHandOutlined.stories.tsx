import type { Meta, StoryObj } from '@storybook/react';

import WavingHandOutlined from '../../lib/social/WavingHandOutlined';

const meta: Meta<typeof WavingHandOutlined> = {
  component: WavingHandOutlined,
  tags: ['autodocs'],
  title: 'social/WavingHandOutlined',
};

export default meta;
type Story = StoryObj<typeof WavingHandOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
