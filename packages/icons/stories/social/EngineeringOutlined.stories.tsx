import type { Meta, StoryObj } from '@storybook/react';

import EngineeringOutlined from '../../lib/social/EngineeringOutlined';

const meta: Meta<typeof EngineeringOutlined> = {
  component: EngineeringOutlined,
  tags: ['autodocs'],
  title: 'social/EngineeringOutlined',
};

export default meta;
type Story = StoryObj<typeof EngineeringOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
