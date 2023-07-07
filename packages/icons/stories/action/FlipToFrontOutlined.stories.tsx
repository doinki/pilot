import type { Meta, StoryObj } from '@storybook/react';

import FlipToFrontOutlined from '../../lib/action/FlipToFrontOutlined';

const meta: Meta<typeof FlipToFrontOutlined> = {
  component: FlipToFrontOutlined,
  tags: ['autodocs'],
  title: 'action/FlipToFrontOutlined',
};

export default meta;
type Story = StoryObj<typeof FlipToFrontOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
