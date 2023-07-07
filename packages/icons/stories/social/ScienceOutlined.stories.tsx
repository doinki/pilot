import type { Meta, StoryObj } from '@storybook/react';

import ScienceOutlined from '../../lib/social/ScienceOutlined';

const meta: Meta<typeof ScienceOutlined> = {
  component: ScienceOutlined,
  tags: ['autodocs'],
  title: 'social/ScienceOutlined',
};

export default meta;
type Story = StoryObj<typeof ScienceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
