import type { Meta, StoryObj } from '@storybook/react';

import LandslideOutlined from '../../lib/social/LandslideOutlined';

const meta: Meta<typeof LandslideOutlined> = {
  component: LandslideOutlined,
  tags: ['autodocs'],
  title: 'social/LandslideOutlined',
};

export default meta;
type Story = StoryObj<typeof LandslideOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
