import type { Meta, StoryObj } from '@storybook/react';

import MapsHomeWorkOutlined from '../../lib/navigation/MapsHomeWorkOutlined';

const meta: Meta<typeof MapsHomeWorkOutlined> = {
  component: MapsHomeWorkOutlined,
  tags: ['autodocs'],
  title: 'navigation/MapsHomeWorkOutlined',
};

export default meta;
type Story = StoryObj<typeof MapsHomeWorkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
