import type { Meta, StoryObj } from '@storybook/react';

import DoorFrontOutlined from '../../lib/search/DoorFrontOutlined';

const meta: Meta<typeof DoorFrontOutlined> = {
  component: DoorFrontOutlined,
  tags: ['autodocs'],
  title: 'search/DoorFrontOutlined',
};

export default meta;
type Story = StoryObj<typeof DoorFrontOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
