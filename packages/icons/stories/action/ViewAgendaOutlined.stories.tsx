import type { Meta, StoryObj } from '@storybook/react';

import ViewAgendaOutlined from '../../lib/action/ViewAgendaOutlined';

const meta: Meta<typeof ViewAgendaOutlined> = {
  component: ViewAgendaOutlined,
  tags: ['autodocs'],
  title: 'action/ViewAgendaOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewAgendaOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
