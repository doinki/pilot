import type { Meta, StoryObj } from '@storybook/react';

import SevenKOutlined from '../../lib/av/SevenKOutlined';

const meta: Meta<typeof SevenKOutlined> = {
  component: SevenKOutlined,
  tags: ['autodocs'],
  title: 'av/SevenKOutlined',
};

export default meta;
type Story = StoryObj<typeof SevenKOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
