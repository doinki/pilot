import type { Meta, StoryObj } from '@storybook/react';

import ContactlessOutlined from '../../lib/action/ContactlessOutlined';

const meta: Meta<typeof ContactlessOutlined> = {
  component: ContactlessOutlined,
  tags: ['autodocs'],
  title: 'action/ContactlessOutlined',
};

export default meta;
type Story = StoryObj<typeof ContactlessOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
