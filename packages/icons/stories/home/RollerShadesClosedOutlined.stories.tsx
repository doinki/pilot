import type { Meta, StoryObj } from '@storybook/react';

import RollerShadesClosedOutlined from '../../lib/home/RollerShadesClosedOutlined';

const meta: Meta<typeof RollerShadesClosedOutlined> = {
  component: RollerShadesClosedOutlined,
  tags: ['autodocs'],
  title: 'home/RollerShadesClosedOutlined',
};

export default meta;
type Story = StoryObj<typeof RollerShadesClosedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
