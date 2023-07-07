import type { Meta, StoryObj } from '@storybook/react';

import LandscapeOutlined from '../../lib/image/LandscapeOutlined';

const meta: Meta<typeof LandscapeOutlined> = {
  component: LandscapeOutlined,
  tags: ['autodocs'],
  title: 'image/LandscapeOutlined',
};

export default meta;
type Story = StoryObj<typeof LandscapeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
