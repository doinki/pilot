import type { Meta, StoryObj } from '@storybook/react';

import FemaleOutlined from '../../lib/social/FemaleOutlined';

const meta: Meta<typeof FemaleOutlined> = {
  component: FemaleOutlined,
  tags: ['autodocs'],
  title: 'social/FemaleOutlined',
};

export default meta;
type Story = StoryObj<typeof FemaleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
