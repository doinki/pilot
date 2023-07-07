import type { Meta, StoryObj } from '@storybook/react';

import SurfingOutlined from '../../lib/social/SurfingOutlined';

const meta: Meta<typeof SurfingOutlined> = {
  component: SurfingOutlined,
  tags: ['autodocs'],
  title: 'social/SurfingOutlined',
};

export default meta;
type Story = StoryObj<typeof SurfingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
