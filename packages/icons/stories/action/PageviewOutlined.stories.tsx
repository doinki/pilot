import type { Meta, StoryObj } from '@storybook/react';

import PageviewOutlined from '../../lib/action/PageviewOutlined';

const meta: Meta<typeof PageviewOutlined> = {
  component: PageviewOutlined,
  tags: ['autodocs'],
  title: 'action/PageviewOutlined',
};

export default meta;
type Story = StoryObj<typeof PageviewOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
