import type { Meta, StoryObj } from '@storybook/react';

import FlipToBackOutlined from '../../lib/action/FlipToBackOutlined';

const meta: Meta<typeof FlipToBackOutlined> = {
  component: FlipToBackOutlined,
  tags: ['autodocs'],
  title: 'action/FlipToBackOutlined',
};

export default meta;
type Story = StoryObj<typeof FlipToBackOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
