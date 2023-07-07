import type { Meta, StoryObj } from '@storybook/react';

import TempleBuddhistOutlined from '../../lib/maps/TempleBuddhistOutlined';

const meta: Meta<typeof TempleBuddhistOutlined> = {
  component: TempleBuddhistOutlined,
  tags: ['autodocs'],
  title: 'maps/TempleBuddhistOutlined',
};

export default meta;
type Story = StoryObj<typeof TempleBuddhistOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
