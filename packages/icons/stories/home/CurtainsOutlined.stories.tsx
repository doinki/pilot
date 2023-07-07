import type { Meta, StoryObj } from '@storybook/react';

import CurtainsOutlined from '../../lib/home/CurtainsOutlined';

const meta: Meta<typeof CurtainsOutlined> = {
  component: CurtainsOutlined,
  tags: ['autodocs'],
  title: 'home/CurtainsOutlined',
};

export default meta;
type Story = StoryObj<typeof CurtainsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
