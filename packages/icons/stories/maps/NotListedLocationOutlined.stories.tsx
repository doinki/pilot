import type { Meta, StoryObj } from '@storybook/react';

import NotListedLocationOutlined from '../../lib/maps/NotListedLocationOutlined';

const meta: Meta<typeof NotListedLocationOutlined> = {
  component: NotListedLocationOutlined,
  tags: ['autodocs'],
  title: 'maps/NotListedLocationOutlined',
};

export default meta;
type Story = StoryObj<typeof NotListedLocationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
