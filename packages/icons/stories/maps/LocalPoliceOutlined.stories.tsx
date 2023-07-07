import type { Meta, StoryObj } from '@storybook/react';

import LocalPoliceOutlined from '../../lib/maps/LocalPoliceOutlined';

const meta: Meta<typeof LocalPoliceOutlined> = {
  component: LocalPoliceOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalPoliceOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalPoliceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
