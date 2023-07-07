import type { Meta, StoryObj } from '@storybook/react';

import CurtainsClosedOutlined from '../../lib/home/CurtainsClosedOutlined';

const meta: Meta<typeof CurtainsClosedOutlined> = {
  component: CurtainsClosedOutlined,
  tags: ['autodocs'],
  title: 'home/CurtainsClosedOutlined',
};

export default meta;
type Story = StoryObj<typeof CurtainsClosedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
