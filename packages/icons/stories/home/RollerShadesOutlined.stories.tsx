import type { Meta, StoryObj } from '@storybook/react';

import RollerShadesOutlined from '../../lib/home/RollerShadesOutlined';

const meta: Meta<typeof RollerShadesOutlined> = {
  component: RollerShadesOutlined,
  tags: ['autodocs'],
  title: 'home/RollerShadesOutlined',
};

export default meta;
type Story = StoryObj<typeof RollerShadesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
